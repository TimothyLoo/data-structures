class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // Initialize a height variable to track the size of the stack
    this.height = 0;
    // Initialize an empty storage object
    this.storage = {};
  }

  // Create methods for the instance to use

  // Method push adds an item to the top of the stack
  push(value) {
    // Set value equal to the key at height
    this.storage[this.height] = value;
    // Increment the height counter to show the new size of the stack & the next index for new item to be added
    this.height++;
  }

  // Method pop removes an item from the top of the stack
  pop () {
    // If there is something on the stack
    if (this.height > 0) {
      // Decrement the height counter to reflect the new height of the stack and the index of the item to be removed
      this.height--;
      // Set var value equal to the item to be removed from the top of the stack
      let value = this.storage[this.height];
      // Remove the item at the top of the stack
      delete this.storage[this.height];
      // Return the value of the item removed
      return value;
    }
  }

  // Method size returns the size of the stack
  size() {
    // return the height of the stack
    return this.height;
  }
}

// Create an instance
var Instance = new Stack();