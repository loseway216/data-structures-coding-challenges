class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }
    // 迭代
    let currentNode = this.root;
    let parent;

    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    if (newValue < parent.val) {
      parent.leftChild = new Node(newValue);
    } else {
      parent.rightChild = new Node(newValue);
    }

    // 递归
    // this.insertHelper(this.root, newValue);
  }

  insertHelper(currentNode, newValue) {
    if (currentNode == null) {
      this.root = new Node(newValue);
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insertHelper(
        currentNode.leftChild,
        newValue
      );
    } else {
      currentNode.rightChild = this.insertHelper(
        currentNode.rightChild,
        newValue
      );
    }
    return currentNode;
  }

  search(value) {
    let currentNode = this.root;

    // 迭代
    while (currentNode && currentNode.val !== value) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    // found or null
    return currentNode;

    // 递归
    // return this.searchHelper(currentNode, value);
  }

  searchHelper(currentNode, value) {
    if (currentNode) {
      if (currentNode.val === value) {
        return currentNode;
      } else if (value < currentNode.val) {
        return this.searchHelper(currentNode.leftChild, value);
      } else {
        return this.searchHelper(currentNode.rightChild, value);
      }
    }

    return null;
  }

  delete(currentNode, value) {
    // case 1: empty tree
    if (currentNode == null) {
      return false;
    }

    let parent;

    while (currentNode && currentNode.val !== value) {
      parent = currentNode;
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    // case 2: not found
    if (currentNode == null) {
      return false;
    }
    // case 3: delete a leaf node
    else if (currentNode.leftChild == null && currentNode.rightChild == null) {
      // delete the root node
      if (currentNode.val == this.root.val) {
        this.root = null;
        return true;
      }
      // 根据大小判断删除左边还是右边
      else if (currentNode.val < parent.val) {
        parent.leftChild = null;
        return true;
      } else {
        parent.rightChild = null;
        return true;
      }
    }
    // case 4: delete a node has a left child only
    else if (currentNode.leftChild && currentNode.rightChild == null) {
      if (currentNode.val == this.root.val) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.leftChild.val < parent.val) {
        parent.leftChild = currentNode.leftChild;
        return true;
      } else {
        parent.rightChild = currentNode.leftChild;
        return true;
      }
    }
    // case 5: delete a node has a right child only
    else if (currentNode.rightChild && currentNode.leftChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.rightChild.val < parent.val) {
        parent.leftChild = currentNode.leftChild;
        return true;
      } else {
        parent.rightChild = currentNode.leftChild;
        return true;
      }
    }
    // case 6: delete a node with two children
    else {
      // 右侧最小的值
      let minRight = currentNode.rightChild;

      while (minRight.leftChild) {
        minRight = minRight.leftChild;
      }

      const temp = minRight.val;
      this.delete(currentNode, minRight.val);
      currentNode.val = temp;
      return true;
    }
  }

  preOrderPrint(currentNode) {
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode) {
      this.inOrderPrint(currentNode.leftChild);
      this.inOrderPrint(currentNode.rightChild);
      console.log(currentNode.val);
    }
  }
}

export default BinarySearchTree;
