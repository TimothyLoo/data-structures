// Instantiate a new graph
var Graph = function() {

  // create a property nodes that is an object that holds nodes
  this.nodes = {};
// create a property edges that is an object that holds connections to nodes
  this.edges = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Add node to object nodes at key node
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Return boolean if the node exists or not
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove edges at key node
  for (let key in this.edges) {
    if (this.edges[key] === node) {
      delete this.edges[key];
    }
  }
  // remove node from nodes at key node
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // If the edge at key from node equals to node
  if (this.edges[fromNode] === toNode) {
    // Return true
    return true;
  }
  return false;
  //return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add edge at key fromNode equal to toNode
  this.edges[fromNode] = toNode;
  // add edge at key toNode equal to fromNode
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // delete edge at key fromNode equal to toNode
  delete this.edges[fromNode];
  // delete edge at key toNode equal to fromNode
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */