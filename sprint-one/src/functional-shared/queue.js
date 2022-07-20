var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an instance
  var instance = {
    front: 0, // Initialize a number to track the front of the queue
    back: 0, // Initialize a number to track the back of the queue
    storage: {} // Initialize the storage object
  };

  // Extend the queueMethods to the instance
  _.extend(instance, queueMethods);

  // Return the instance
  return instance;
};

var queueMethods = {};

// Method to add an item to the back of the queue
queueMethods.enqueue = function (value) {
  this.storage[this.back] = value; // Add the new value at key back to the storage object
  this.back++; // Increase the tracking element back for the next last item in queue
};


// Method to remove an item from the front of the queue
queueMethods.dequeue = function () {
  // if there is something in the queue
  if (this.back - this.front > 0) {
    var value = this.storage[this.front]; // set var value to equal the item to be removed from the front of the queue
    delete this.storage[this.front]; // remove the item at the front of the queue
    this.front++; // increment the count front to be the next item that moved to the front of the queue

    return value; // return the item that was removed from the front of the queue
  }
};

// Method to return the size of the queue
queueMethods.size = function () {
  return this.back - this.front;
};