var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.front = 0; // Initialize a variable to track the front of the queue
  this.back = 0; // Initialize a variable to track the back of the queue
  this.storage = {}; // Initialize an empty object to store the items in the queue
};


// Create methods to be used by the instance

// Method enqueue adds an item to the back of the queue
Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value; // Set value equal the key at the back of the queue
  this.back++; // Increment the back counter to mark the next index for a new item to be added
};

// Method dequeue removes an item from the front of the queue
Queue.prototype.dequeue = function () {
  // If there is something in the queue
  if (this.back - this.front) {
    let value = this.storage[this.front]; // Set var value equal to the item to be removed from the front of the queue
    delete this.storage[this.front]; // Remove the item from the front of the queue
    this.front++; // Increment the front counter to indicate the next item moved to the front of the queue
    return value; // return the value of the item removed
  }
};

// Method size returns the size of the queue
Queue.prototype.size = function () {
  return this.back - this.front; // Return the size of the queue
};

// Create an instance
var Instance = new Queue();