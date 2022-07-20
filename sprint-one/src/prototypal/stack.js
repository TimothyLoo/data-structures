var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an instance
  var instance = Object.create(stackMethods);

  instance.height = 0; // Initialize the height of the stack to be 0
  instance.storage = {}; // Initialize the storage to be an empty object

  // Return instance
  return instance;
};

var stackMethods = {};

// Method to push a new item to the top of the stack
stackMethods.push = function (value) {
  this.storage[this.height] = value; // Set value at the key of the top of the stack
  this.height++; // Increment the height of the stack (which also sets the next key for the next item)
};

// Method to pop the item off the top of the stack
stackMethods.pop = function () {
  // if there is something in the stack
  if (this.height > 0) {
    this.height--; // Decrement the height of the stack (which also puts the index to the top item of the stack)
    var value = this.storage[this.height];// Set var value to equal what will be removed from the top of the stack
    delete this.storage[this.height]; // Remove the item from the top of the stack
    return value; // Return value, what was removed from the top of the stack
  }
};

// Method to return the size of the stack
stackMethods.size = function () {
  return this.height; // return the height of the stack
};