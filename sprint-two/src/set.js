var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// This method takes any string and adds it to the set
setPrototype.add = function(item) {
  // Add to storage key item equal to item
  this._storage[item] = item;
};

// This method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  // If key item exists, return true, else return false
  if (this._storage[item]) {
    return true;
  }
  return false;
};

// This method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  // If item at key item exists in storage, delete
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
