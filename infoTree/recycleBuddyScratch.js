//import the current list of leaves from separate file
import whereDoesItGo from './whereDoesItGo';
import nodeList from './nodeList'

//I found this on a github repo (under one of my starred Repos) so obviously it's not my own work
//It has way more than we're looking for, so we could go through and trim it, but I'd like to keep most for now, and if efficiency becomes a problem we can work on it
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
//takes in a leaf data string and returns it's address as a string formatted [num, num, ... num]
//where tree.root.children[num].children[num]...children[num].data is the string put in
//TODO: make this work
Tree.prototype.findAddress = function(data){
	if(!this.contains(data, this.traverseBF)){
		return console.log("Tree does not contain "+ data);
	}
	return true
}


//formatting whereRecycleProto. Changes the value string to an array. 
//This could be done with regular expressions, but an array containing the parents seems easier to me.
//TODO: adapt for different inputs. because of the slice(4,-1) this could break easily when we include the category titles
function formatRecycleObj(whereRecycleObj){
  for(let i = 0; i<whereRecycleObj.length; i++){
  	//splits into array and slices from WhereDoesItGo/[......]/index.htm
    whereRecycleObj[i].value = whereRecycleObj[i].value.split("/").slice(4, -1)
  }
  return whereRecycleObj;
}

//creates a tree with a root node of "initialNode" with children of general recycle materials based on "Where does it go" on seattle.gov
//each of those branches can have more branches with more specific recycling materials/objects

//initialize tree with first node names rootNode
var recycleTree = new Tree()
recycleTree.add("rootNode")

function createRecycleTree(recycleArray){
  //format object so its easier to use if it's not formatted
  if(typeof recycleArray[0].value==="string"){
    recycleArray = formatRecycleObj(recycleArray);
  }
  //loop through every object in recycleArray 
  for(let i=0; i<recycleArray.length; i++){
    //for every branch, this creates the branch structure, but no the leaves
    for(let j=0; j<recycleArray[i].value.length; j++){
      //check to see if the branch is in the tree already
      if(!recycleTree.contains(recycleArray[i].value[j], recycleTree.traverseBF)){
        // console.log(recycleArray[i].value[j])
        // checks to make sure the branch's parent isn't the rootNode
        if(recycleArray[i].value[j-1]){
        	recycleTree.add(recycleArray[i].value[j], recycleArray[i].value[j-1])
        } else {
        	recycleTree.add(recycleArray[i].value[j], "rootNode")
        }
      }
    }
    //adds the leaves 
    recycleTree.add(recycleArray[i].label, recycleArray[i].value[recycleArray[i].value.length-1]);
  }
  // console.log(recycleTree);
  return recycleTree
}

//call the function
createRecycleTree(whereDoesItGo);
