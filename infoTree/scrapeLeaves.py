from bs4 import BeautifulSoup as BS
import requests
from builtins import type
from bs4.element import NavigableString
from bs4.element import Tag
import os
import codecs
import re

replace = {
    'a' : '"link"',
    'h3' : '"heading"',
    'p' : '"para"',
    'strong' : '"bold"',
    'h1': '"title"',
    'li': '"bullet"',
    'ul': '"list"',
    'div': '"CONTAINER"',
    'ol' :'"olist"'
    
}

class Scrape(object):
    """docstring for ClassName"""
    def __init__(self, URL, count, debug):
        self.indent = 0
        self.outfile = None
        self.count = count
        self.URL = URL
        self.debug = debug

    def Solve(self):
        print('scraping URL' + str(self.count) + ': ' + self.URL + '\n')
        scrape = self.URL.strip('\n')
        
        page = requests.get(scrape)
        soup = BS(page.content, "html.parser")    
        outfileName = self.URL.split('/')[-2]
            
        self.outfile = codecs.open('out/' + outfileName + '.json', 'w', 'utf-8')
        
        root = soup.find(id = 'region')
        
        self.outfile.write('{\n')
        self.indent = self.indent + 1
        self.write_Indent('"type": "URL' + str(self.count) + '",' ,None,'\n','',True)
        self.write_Indent('"children": ', None, '','', True)

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
        #escape all quotes
        preescaped = elt.string
        postescaped = preescaped.replace('"', '\\\"')
        return postescaped

    def quoteWrap(self,str):
        return '"' + str + '"'

    def write_Indent(self,text, child, mod, mod2, isLast):
        parsed = ''
        if child: parsed = self.quoteWrap(self.ParseNavStr(child))
        comma = ','
        if isLast: comma = ''
        str = '\t' * self.indent + text + parsed + mod2 + comma + mod
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
       
        self.outfile.write('[\n')
        self.indent = self.indent + 1
        #run through node.contents, create non_garbage list, then start alg
        contents, last_child_index = self.filterNode(node)
        counter = 0
        isLastChild = False
        #if more than 1 elt, need to make an array
        for child in contents:
            if counter >= last_child_index:
                isLastChild = True
            if type(child) == Tag:
                tagType = child.name
                if tagType == 'a':
                    comma = ','
                    if isLastChild: comma = ''
                    self.outfile.write('{"type": "link", "href": ' + self.quoteWrap(child['href']) + ', "text": ' + self.quoteWrap(self.ParseNavStr(child.contents[0])) + '}' + comma + '\n' )
                    counter = counter + 1
                    continue
                replaceString = ''
                if tagType in replace:
                    replaceString = replace[tagType]
                else:
                    replaceString = self.quoteWrap(str(tagType))
                self.write_Indent('{"type": ' + replaceString, None, '\n', '', False) #true, because this is only for printing property names
                self.write_Indent('"children": ', None, '','',True)
                self.write_tree_into_JSON(child, isLastChild)
                #self.write_Indent('\n', None, '', '', isLastChild)
            elif type(child) == NavigableString:
                parsed = self.ParseNavStr(child)
                self.write_Indent('',child, '\n', '', isLastChild)
            counter = counter + 1
        self.indent = self.indent - 1
        self.outfile.write('\n')
        self.write_Obj(']}', isLast)
            


    
        
        
    

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