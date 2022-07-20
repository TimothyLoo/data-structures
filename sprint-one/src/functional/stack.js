var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Create a variable size to track the size of the object instance

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; // add the value to the storage object at index #size
    size++; // increase the size count to indicate size of storage object and set next key
  };

  someInstance.pop = function() {
    // Check to see if there are any items in the stack. Nothing can be removed if there is nothing in there
    if (size > 0) {
      size--; // Decrease the count of the stack
      var value = storage[size]; // Set a var value to what is going to be removed from the top of the stack
      delete storage[size]; // Remove the item from the top of the stack
      return value; // Return what is being removed from the top of the stack
    }
  };

  someInstance.size = function() {
    return size; // Return the size of the stack
  };

  return someInstance;
};
