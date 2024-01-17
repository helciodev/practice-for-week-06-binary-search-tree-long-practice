// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
const { Queue, SinglyLinkedNode } = require("./queue");
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    } else {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    }
  }

  search(val) {
    let current = this.root;

    while (current) {
      if (val === current?.val) return true;

      if (val < current?.val) current = current.left;
      if (val > current?.val) current = current.right;
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.length > 0) {
      let node = queue.dequeue();
      console.log(node.val);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
