

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
  let bucket = this._storage.get(index);
  // Iterate through bucket
  for (let i = 0; i < bucket.length; i++) {
  // If key k is found bucket[i][0] equal k
    if (bucket[i][0] === k) {
      bucket[i][1] = v; // overwrite bucket[i][1]
      return;
    }
  }
  // in value should be a tuple, so push [k, v] to value
  this._storage.get(index).push([k, v]); // storage[index].push([k, v])
};

// This method should take in a key and return a value
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // bucket is an array of tuples
  // Iterate through the bucket
  for (let i = 0; i < bucket.length; i++) {
    console.log('bucket[i]: ' + bucket[i]);
    // If tuple[0] equals k
    if (bucket[i][0] === k) { // bu
      // return tuples[1]
      return bucket[i][1];
    }
  }
};

// This method should remove the value at index that gets provided with key k
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  let bucket = this._storage.get(index);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */