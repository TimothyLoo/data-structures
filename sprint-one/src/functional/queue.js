var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var front = 0; // Declare a variable to track the front of the queue

  var back = 0; // Declare variable to track the back of the queue

  // Implement the methods below

  // enqueue adds something to the back of the queue
  someInstance.enqueue = function(value) {
    storage[back] = value; // Add the value to storage at key back
    back++; // Increase the key index for the next item at the back of the queue
  };

  // dequeue removes something from the front of the queue
  someInstance.dequeue = function() {
    // if there is something in queue
    if (back - front > 0) {
      var value = storage[front]; // Set var value to the item at the front of the queue
      delete storage[front]; // Remove the item from the front of the queue
      front++; // Increment the count front to be the next item in the queue
      return value; // Return what was removed from the front of the queue
    }
  };

  // reports the size of the queue
  someInstance.size = function() {
    return back - front;
  };

  // Return instance
  return someInstance;
};
