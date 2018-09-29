from bs4 import BeautifulSoup as BS
import requests
from builtins import type
from bs4.element import NavigableString
from bs4.element import Tag
import os

replace = {
    'a' : '"link"',
    'h3' : '"heading"',
    'p' : '"para"',
    'strong' : '"bold"',
    'h1': '"title"',
    'li': '"bullet"',
    'ul': '"list"'
    #'div': 'CONTAINER'
    
}

class Scrape(object):
    """docstring for ClassName"""
    def __init__(self, URL, count, debug):
        self.indent = 0
        self.outfile = open('out/url' + str(count) + '.txt', 'w')
        self.count = count
        self.URL = URL
        self.debug = debug

    def Solve(self):
        print('scraping URL' + str(self.count) + ': ' + self.URL + '\n')
        scrape = self.URL.strip('\n')
        
        page = requests.get(scrape)
        soup = BS(page.content, "html.parser")    
            
        root = soup.find(id = 'region')

        try :
            self.write_tree_into_JSON(root, True)

        except Exception as ex:
            print(ex)
            file = open('errog.txt', 'a')
            file.write('error with URL ' + str(self.count) + '\n')
            file.close()
        
        self.outfile.close()
        return self.count + 1
        
    def ParseNavStr(self,elt):
        toConvert = str(elt.string)
        return str(toConvert.encode('ascii', 'replace').decode("utf-8"))

    def quoteWrap(self,str):
        return '"' + str + '"'

    def write_Indent(self,text, child, mod, isLast):
        parsed = ''
        if child: parsed = self.quoteWrap(self.ParseNavStr(child))
        comma = ','
        if isLast: comma = ''
        str = '\t' * self.indent + text + parsed + comma + mod
        self.outfile.write(str)
        if self.debug: print(str)
        
    def write_Obj(self,text, isLast):
        comma = ','
        if isLast: comma = ''
        str = '\t' * self.indent + text + comma + '\n'
        self.outfile.write(str)
        if self.debug: print(str)

    def write_Str(self, mod, child):
        parsed = self.ParseNavStr(child)
        str = mod + parsed + '\n'

    def filterNode(self, node):
        ret = []
        
        for child in node.contents:
            if type(child) == Tag:
                ret.append(child)
            elif type(child) == NavigableString:
                parsed = self.ParseNavStr(child)
                if not (parsed == '\n' or parsed == '' or parsed == ' ' or (len(parsed) > 2 and parsed[2] == '{') ):
                    ret.append(child)
        last_child_count = len(ret)-1 # check to see when child is last to remove comma
        return ret, last_child_count
        

    def write_tree_into_JSON(self,node, isLast):
        #basecase: if no tag children just print and return, dont recurse

        recurseNeeded = False
        #first find out if leaf
        for child in node.contents:
            if type(child) == Tag:
                recurseNeeded = True
                break

        #now we can check if we hit base case or not
        if not recurseNeeded:
            #if link have to handle differently
            if node.name == 'a':
                comma = ','
                if isLast: comma = ''
                self.outfile.write('{"href": ' + self.quoteWrap(node['href']) + ', "text": ' + self.quoteWrap(self.ParseNavStr(node.contents[0])) + '}' + comma + '\n' )
            else:
                #just iterate thru and print text ***actually if you get here it should be just one string
                for child in node.contents:
                    parsed = self.quoteWrap(self.ParseNavStr(child))
                    mod = ','
                    if isLast: mod = ''
                    out_str = parsed + mod
                    self.outfile.write(out_str + '\n')
                    if self.debug: print(out_str + '\n')
                

        #means we have tags and text to explore
        else:
            #open object and increase indent
            self.outfile.write('{\n')
            self.indent = self.indent + 1
            #run through node.contents, create non_garbage list, then start alg
            contents, last_child_index = self.filterNode(node)
            counter = 0
            isLastChild = False
            for child in contents:
                if counter >= last_child_index:
                    isLastChild = True
                if type(child) == Tag:
                    tagType = child.name
                    replaceString = ''
                    if tagType in replace:
                        replaceString = replace[tagType] + ': '
                    self.write_Indent(replaceString, None, '', True) #true, because this is only for printing property names
                    self.write_tree_into_JSON(child, isLastChild)
                elif type(child) == NavigableString:
                    parsed = self.ParseNavStr(child)
                    self.write_Indent('"text": ',child, '\n', isLastChild)
                counter = counter + 1
            self.indent = self.indent - 1
            self.outfile.write('\n')
            self.write_Obj('}', isLast)
            


    
        
        
    

if __name__ == '__main__':
    count = 0
    debug = False
    #clear error log
    file = open('errog.txt', 'w')
    file.write('')
    file.close()
    file = open('urls.txt','r')
    for URL in file:
        '''if count == 5: break
        if count != 4: 
            count = count + 1
            continue'''
        
        if URL == '\n': continue #in case '\n' at end of file
        scrape = Scrape(URL, count, debug)
        count = scrape.Solve()