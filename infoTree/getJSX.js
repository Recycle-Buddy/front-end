var obj = JSON.parse(a)

var replace = {
    link :  "Link"
    heading : "Header"
    para : "Paragraph"
    bold : "Bold"
    title : "LargeText"
    bullet : "Bullet"
    list : 
}


function getjsx(node) {
    //obj format:
    //type : tag
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
getjsx(obj.children)

//https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9