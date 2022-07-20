class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // Initialize front to track the index of the item at the front of the queue
    this.front = 0;
    // Initialize back to track the index of the item at the back of the queue
    this.back = 0;
    // Initialize an empty object storage that will hold each item
    this.storage = {};
  }

  // Create methods for the instance to use

  // Method enqueue adds an item to the back of the queue
  enqueue(value) {
    // Set value equal to the index of the back of the queue
    this.storage[this.back] = value;
    // Increment back counter to reflect the next index for item to be added at back of queue
    this.back++;
  }

  // Method dequeue removes an item from the front of the queue
  dequeue() {
    // If there is something in the queue
    if (this.back - this.front > 0) {
      // Set var value equal to the item to be removed from the front of the queue
      let value = this.storage[this.front];
      // Remove the item from the front of the queue
      delete this.storage[this.front];
      // Increment the front counter to reflect the next item moved to the front of the queue
      this.front++;
      // Return the value of the item removed
      return value;
    }
  }

  // Method size returns the size of the queue
  size() {
    // Returns the size of the queue
    return this.back - this.front;
  }

}

// Create instance
var Instance = new Queue();
