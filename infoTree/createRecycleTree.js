import whereDoesItGo from './whereDoesItGo';
import nodeList from './nodeList';

// This tree implementation is originally from https://github.com/benoitvallon/computer-science-in-javascript . Added and trimmed where necessary
function Node(data) {
  this.data = data;
  this.children = [];
  //added a parent connector
  this.parent = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
  var node = new Node(data);
  var parent = toNodeData ? this.findBFS(toNodeData) : null;
  node.parent = parent;
  if(parent) {
    parent.children.push(node);
  } else {
    if(!this.root) {
      this.root = node;
    } else {
      return 'Root node is already assigned';
    }
  }
};
Tree.prototype.remove = function(data) {
  if(this.root.data === data) {
    this.root = null;
  }

  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    for(var i = 0; i < node.children.length; i++) {
      if(node.children[i].data === data) {
        node.children.splice(i, 1);
      } else {
        queue.push(node.children[i]);
      }
    }
  }
};
Tree.prototype.contains = function(data) {
  return this.findBFS(data) ? true : false;
};
Tree.prototype.findBFS = function(data) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(node.data === data) {
      return node;
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};
Tree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      this._preOrder(node.children[i], fn);
    }
  }
};
Tree.prototype._postOrder = function(node, fn) {
  if(node) {
    for(var i = 0; i < node.children.length; i++) {
      this._postOrder(node.children[i], fn);
    }
    if(fn) {
      fn(node);
    }
  }
};
Tree.prototype.traverseDFS = function(fn, method) {
  var current = this.root;
  if(method) {
    this['_' + method](current, fn);
  } else {
    this._preOrder(current, fn);
  }
};
Tree.prototype.traverseBFS = function(fn) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
};
Tree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.slice(0, -2).trim());
};
Tree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.trim());
};
//TODO: takes in a leaf data string and returns it's address as a string formatted [num, num, ... num]
//where tree.root.children[num].children[num]...children[num].data is the string put in
Tree.prototype.findAddress = function(data){
	if(!this.contains(data, this.traverseBF)){
		return console.log("Tree does not contain "+ data);
	}
	return true
}

Tree.prototype.findEveryLeaf = function(){
	var leafArray = []
	//TODO: find every leaf Node and push it into leafArray
	return leafArray;
}

//finds the URL to scrape data from by adding parent's name to base URL
Tree.prototype.findUrl = function(leaf){
	url = "https://www.seattle.gov/util/MyServices/WhereDoesItGo/"
	while(leaf.data!=='rootNode'){
		url += leaf.data + "/";
		//Bad Idea. Will fix
		leaf = leaf.parent;
	}
	url += "index.htm";
	return url
}
// End Tree Implementation











//formatting whereDoesItGo. Changes the value string => array. 
//This could be done with regular expressions, but an array containing the parents seems easier to me.
//TODO: adapt for different inputs. because of the slice(4,-1) this could break easily when we include the category titles
function formatRecycleArray(whereRecycleArray){
  whereRecycleArray.forEach(branchInfo => branchInfo.value = branchInfo.value.split("/").slice(4,-1))
  return whereRecycleArray;
}

//creates a tree with a root node of "rootNode" with children of general recycle materials based on "Where does it go" on seattle.gov
//each of those branches can have more branches with more specific recycling materials/objects
export default function createRecycleTree(recycleArray){
  var recycleTree = new Tree()
  recycleTree.add("rootNode")

  //format object so its easier to use if it's not formatted
  (typeof recycleArray[0].value==="string") && (recycleArray = formatRecycleArray(recycleArray))

  recycleArray.forEach(branchInfo => {
    branchInfo.value.forEach((branchName, index) => 
      !recycleTree.contains(branchName) && 
        (branchInfo.value[index-1] ? recycleTree.add(branchName, branchInfo.value[index-1]) : recycleTree.add(branchName, "rootNode")
      )
    )
    //add the leafs 
    recycleTree.add(branchInfo.label, branchInfo.value[branchInfo.value.length-1])
    }
  )
  return recycleTree
}
 