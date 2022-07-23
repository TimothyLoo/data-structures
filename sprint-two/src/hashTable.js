

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// This method should add a key k and value v pair to the hash table
HashTable.prototype.insert = function(k, v) {
  // This hash function will give the index at which the key value pair will be inserted
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if storage[index] is not null
  if (!this._storage.get(index)) {
    // initiate bucket to empty array
    this._storage.set(index, []);
  }
  // set a temp var for bucket
  let bucket = this._storage.get(index);
  // Iterate through bucket
  for (let i = 0; i < bucket.length; i++) {
  // If key k is found bucket[i][0] equal k
    if (bucket[i][0] === k) {
      bucket[i][1] = v; // overwrite bucket[i][1]
      return;
    }
  }
  // Else if the key does not exist, add a new key value pair to bucket
  this._storage.get(index).push([k, v]); // storage[index].push([k, v])
};

// This method should take in a key and return a value
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // Set temp var bucket
  // Iterate through the bucket
  for (let i = 0; i < bucket.length; i++) {
    // If tuple[0] equals k
    if (bucket[i][0] === k) {
      // return tuples[1]
      return bucket[i][1];
    }
  }
};

// This method should remove the value at index that gets provided with key k
HashTable.prototype.remove = function(k) {
  // I - key
  // O -

  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  let bucket = this._storage.get(index);
  // Iterate through the bucket
  for (let i = 0; i < bucket.length; i++) {
    // If tuple[0] equals key
    if (bucket[i][0] === k) {
      // delete the whole tuple at index
      bucket.splice(i);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */