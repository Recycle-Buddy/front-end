import {Button} from './button.js';
import LargeText from '../components/LargeText.js';
import Link from '../components/Link.js';
import Header from '../components/Header.js';
import Paragraph from '../components/Paragraph.js';
import Bold from '../components/Bold.js';

var requireJSON = require('./requireJSON.js');



var replace = {
    link :  "Link",
    heading : "Header",
    para : "Paragraph",
    bold : "Bold",
    title : "LargeText",
    bullet : "Paragraph",
    list : "Paragraph"
};


function getJSX(node) {
    //obj format:
    //type : ta
    //children array of object or string
    let nodeType = node.type;
    let children = node.children;

    //check dictionary to see what tag we should use
    let TagName = replace[nodeType];

    children.map(child => 
        switch (typeof(child)) {
            case "string":
                return <TagName>{child}</TagName>
            case "object":
                //for links
                return <View>{getjsx(child)}</View>
            default:
                return "no mapping available"
        }
    );
}

function URLindexToObj(index){
    var file = varMapper(index);
    var obj = JSON.parse(file);
    return obj;
}


//https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9