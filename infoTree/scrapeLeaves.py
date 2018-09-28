from bs4 import BeautifulSoup as BS
import requests
from builtins import type
from bs4.element import NavigableString
from bs4.element import Tag

replace = {
    'a' : 'LINK',
    'h3' : 'ICON',
    'p' : 'TEXT',
    'strong' : 'BOLD',
    'h1': 'TITLE',
    'li': 'BULLET'
    #'div': 'CONTAINER'
}

def ParseNavStr(elt):
    toConvert = str(elt.string)
    return str(toConvert.encode('ascii', 'replace').decode("utf-8"))

def scrape_URL(URL, count):
    print('scraping URL' + str(count[0]) + ': ' + URL + '\n')
    scrape = URL.strip('\n')
    
    page = requests.get(scrape)
    soup = BS(page.content, "html.parser")
    
    
    try:
    
        #head node
        
        
        regionDiv = soup.find(id = 'region')
        
        outfile = open('out/url' + str(count[0]) + '.txt', 'w')
        stack = [(regionDiv, 0)]

        while stack:
            n = stack.pop()
            node = n[0]
            current_indent = n[1]
            mod = 0 #for ps and as
            reverse_stack = []
            writeToFileString = ''
            tagType = node.name
            if tagType == 'p': mod = 1
            replaceString = ''
            if tagType in replace:
                replaceString = replace[tagType] + ': '
            
            for child in node.contents:
                if type(child) == NavigableString: 
                    parsed = ParseNavStr(child)
                    if parsed == '\n' or parsed == '' or parsed == ' ': continue
                    elif len(parsed) > 2 and parsed[2] == '{': continue
                    else:
                        writeToFileString += ('\t' * (current_indent+mod) ) + replaceString + parsed + '\n'
                        
                elif type(child) == Tag:
                    tagType = child.name
                    if tagType != 'a':
                        reverse_stack.append((child, current_indent + 1))
                    else:
                        textName = ParseNavStr(child.contents[0])
                        link = child['href']
                        writeToFileString += ('\t' * (current_indent+mod) ) + 'LINK: {textname=' + textName + ' URL= ' + link + '}\n'
               
            outfile.write(writeToFileString)      
            for child in reverse_stack[::-1]:
                stack.append(child)       
        
        outfile.close()
        
        count[0] = count[0] + 1
    
    except Exception as ex:
        print(ex)
        file = open('errog.txt', 'a')
        file.write('error with URL ' + str(count[0]) + '\n')
        file.close()
        count[0] = count[0] + 1
        return
    

if __name__ == '__main__':
    count = [0]
    #clear error log
    file = open('errog.txt', 'w')
    file.write('')
    file.close()
    file = open('urls.txt','r')
    for URL in file:
        '''if count[0] == 18: break
        if count[0] != 17: 
            count[0] = count[0] + 1
            continue'''
        
        if URL == '\n': continue #in case '\n' at end of file
        scrape_URL(URL, count)