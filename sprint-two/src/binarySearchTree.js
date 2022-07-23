var BinarySearchTree = function(value) {
  // Does not use the keyword: 'new' to create instance
  // Cant use pseudoclassical style
  // Use prototypal to create instance

  var node = Object.create(bstTreeMethods);

  // Create properties
  // value property set to value
  node.value = value;
  // left property default to null
  node.left = null;
  // right property default to null
  node.right = null;
  // Return instance
  return node;
};

// Methods
var bstTreeMethods = {};

// A method, which accepts a value and places it in the tree in the correct position.
bstTreeMethods.insert = function (value) {
  // I - value
  // O -

  let newNode = BinarySearchTree(value);
  // Base Case
  // If left property is null and if value of new node is less than value of current node
  if (!this.left && value < this.value) {
    // left property gets create new node with value
    this.left = newNode;
  // Else if right property is null and if value of new node is greater than value of current node
  } else if (!this.right && value > this.value) {
    // right property gets create new node with value
    this.right = newNode;
  }
  // Recursive Case
  // If left property is not null (exists) and if value of new node is less than value of current node
  if (this.left && value < this.value) {
    // Recursively call insert on the node at property left
    this.left.insert(value);
    // Else if right property is not null (exists) and if value of new node is greater than value of current node
  } else if (this.right && value > this.value) {
    // Recursively call insert on right node
    this.right.insert(value);
  }
};

// A method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
bstTreeMethods.contains = function (value) {
  // I - value
  // O - boolean

  // If the parameter value is equal to the node value
  if (value === this.value) {
    // return true
    return true;
  }

  // If a node at the left property exists and value is less than the node value
  if (this.left && value < this.value) {
    // Return and call the contains method on the node at left property
    return this.left.contains(value);
  // Else if a node at the right property exists and value is greater than the node value
  } else if (this.right && value > this.value) {
    // Return and call the contains method on the node at the right property
    return this.right.contains(value);
  }

  // Return false
  return false;
};

// A method, which accepts a callback and executes it on every value contained in the tree.
bstTreeMethods.depthFirstLog = function (callback) {
  // I - callback function
  // O -

  // Call callback function on the current node's (this) value
  callback(this.value);
  // If node at left property exists
  if (this.left) {
    // Call depthFirstLog on left node
    this.left.depthFirstLog(callback);
  }
  // If node at right property exists
  if (this.right) {
    // Call depthFirstLog on right node
    this.right.depthFirstLog(callback);
  }

};