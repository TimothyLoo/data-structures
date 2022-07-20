var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an instance
  var someInstance = {
    height: 0,
    storage: {}
  };

  // Create a new storage (within an instance)
  // var storage = {};

  // Initialize the size value of the storage object (within the instance)
  // var size = 0;

  // Give the storage object access to the stackMethods
  _.extend(someInstance, stackMethods);

  // return an instance
  return someInstance;
};

// Create the stackMethods for the instance
var stackMethods = {};

// Push method
stackMethods.push = function (value) {
  this.storage[this.height] = value; // Add the value at key height in the Stack
  this.height++; // Increase the height of the stack and set the next numerical key
};

// Pop method
stackMethods.pop = function () {
  // If there is something on the stack
  if (this.height > 0) {
    this.height--; // Decrease the height of the stack to be the top item in the list
    var value = this.storage[this.height]; // set a variable value to what is going to be removed from the top of the stack
    delete this.storage[this.height]; // remove the top item from the stack
    return value; // return what was remove off the top of the stack
  }

};

// Size method
stackMethods.size = function () {
  // returns the height of the stack
  return this.height;
};