var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.height = 0; // Initialize the height of the stack
  this.storage = {}; // Initialize an empty object of storage items
};

// Create methods to be used by the instance

// Push method adds an item to the top of the stack
Stack.prototype.push = function (value) {
  this.storage[this.height] = value; // Set value to the index height, which adds to the top of the stack
  this.height++; // Increment the height counter to reflect the size of the stack and the next index for which to add a new item
};

// Pop method removes an item from the top of the stack
Stack.prototype.pop = function () {
  // If there is something on the stack
  if (this.height > 0) {
    this.height--; // Decrement the height counter to reflect the new height of the stack, and set to index to the item on the top of the stack
    let value = this.storage[this.height]; // Set var value to the item being removed from the top of the stack
    delete this.storage[this.height]; // Remove the item from the top of the stack
    return value; // Return the value of what was removed from the top of the stack
  }
};

// Size method returns the height of the stack
Stack.prototype.size = function () {
  return this.height; // Returns the height of the stack
};

// Create an instance
var Instance = new Stack();