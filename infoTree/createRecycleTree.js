import { nodeList } from './nodeList';

var output = {data: 'root', children: []}

nodeList.forEach(node => {
  const path = node.value.split('/')
  if(path[0]) {
    findOrCreatePath(output, path, node.label)
  }
})

function findOrCreatePath(tree, path, label) {
  const [step, ...remainingPath] = path
  if(!step) {
    return
  }
  if(!remainingPath.length) {
    tree.children.push({data: step, label, children: []})
    return
  }
  let currentNode = tree.children.find(el => el.data === step)
  if(!currentNode) {
    tree.children.push({data: step, children: []})
    currentNode = tree.children.find(el => el.data === step)
  }

  findOrCreatePath(currentNode, remainingPath, label)
}

console.log(JSON.stringify(output))
