var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an instance
  var instance = Object.create(queueMethods);

  // Initialize the values of an instance
  instance.front = 0; // Create variable to track front of queue
  instance.back = 0; // Create variable to track the back of queue
  instance.storage = {}; // Create the storage object

  // Return the instance
  return instance;
};

var queueMethods = {};

// Method to add an item to the back of the queue
queueMethods.enqueue = function (value) {
  this.storage[this.back] = value; // Assign value to the key at the back of the queue
  this.back++; // Increment the back count to track the next available key for next item
};

// Method to remove an item from the front of the queue
queueMethods.dequeue = function () {
  // If there is something in the queue
  if (this.back - this.front > 0) {
    var value = this.storage[this.front]; // Set var value equal to the item at key front of the queue
    delete this.storage[this.front]; // Remove the item from the front of the queue
    this.front++; // Increment the front count to be the next item in the queue
    return value; // Return the item that was removed from the front of the queue
  }
};

// Method to return the size of the queue
queueMethods.size = function () {
  return this.back - this.front; // Return the size of the queue
};
