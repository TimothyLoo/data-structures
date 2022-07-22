var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // This method adds a node to the tail of the list
  list.addToTail = function(value) {
    // Create a node
    let newNode = Node(value);

    // If there's nothing in the list
    if (list.head === null) {
      // Point list head to new node
      list.head = newNode;
    }

    // If there's something in the list
    if (list.tail !== null) {
      // Point old last node to new node
      list.tail.next = newNode;
    }

    // Point list tail to new node
    list.tail = newNode;
  };

  // This method removes a node from the front of the list
  list.removeHead = function() {
    // I -
    // O - value of node being removed

    // If there's something in the list
    if (list.head !== null) {
      // Set var value to the value of the node being removed
      let value = list.head.value;
      // Point list head to old node's next property
      list.head = list.head.next;
      // Return value
      return value;
    }

  };

  // This method checks to see if a node in the list has a target value
  list.contains = function(target) {
    // I - value prototype
    // O - boolean

    // If there's something in the list
    if (list.head !== null) {
      // Set temp var to the first node in the list
      let temp = list.head;
      // Iterate through the list
      while (temp.next !== null || list.tail.value === target) {
        // If node's value equals target
        if (temp.value === target) {
          // return true
          return true;
        }
        // set temp to temp's next property
        temp = temp.next;
      }
      // return false
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
