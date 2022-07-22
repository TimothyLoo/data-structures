var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  // Give the new instanciated object access to the methods
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// This method creates a tree node and adds it to the children property of the current tree
treeMethods.addChild = function(value) {
  // I - prototype
  // O -

  // Create new node object
  // Give node's value property the parameter value
  let newNode = Tree(value);

  // Push the new node to the children array for current node
  this.children.push(newNode);

};

// This method returns a boolean if the target value is found in the tree
treeMethods.contains = function(target) {
  // I - value prototype
  // O - boolean

  // Recursive Case
  // If the node's children array is not length of 0
  if (this.children.length !== 0) {
    // Iterate through the node's children array
    for (let i = 0; i < this.children.length; i++) {
      // call & return contains method on each of the children nodes
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  // Base Case
  // If the node's value property is equal to target
  if (this.value === target) {
    // Return true
    return true;
  }
  // Return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
