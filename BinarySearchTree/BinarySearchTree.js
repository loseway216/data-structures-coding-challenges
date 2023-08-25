class Node {
  constructor(value) {
    this.value = value;
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
      if (newValue < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    if (newValue < parent.value) {
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
    } else if (newValue < currentNode.value) {
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
    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) {
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
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
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

    while (currentNode && currentNode.value !== value) {
      parent = currentNode;
      if (value < currentNode.value) {
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
      if (currentNode.value == this.root.value) {
        this.root = null;
        return true;
      }
      // 根据大小判断删除左边还是右边
      else if (currentNode.value < parent.value) {
        parent.leftChild = null;
        return true;
      } else {
        parent.rightChild = null;
        return true;
      }
    }
    // case 4: delete a node has a left child only
    else if (currentNode.leftChild && currentNode.rightChild == null) {
      if (currentNode.value == this.root.value) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.leftChild.value < parent.value) {
        parent.leftChild = currentNode.leftChild;
        return true;
      } else {
        parent.rightChild = currentNode.leftChild;
        return true;
      }
    }
    // case 5: delete a node has a right child only
    else if (currentNode.rightChild && currentNode.leftChild == null) {
      if (currentNode.value === this.root.value) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.rightChild.value < parent.value) {
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

      const temp = minRight.value;
      this.delete(currentNode, minRight.value);
      currentNode.value = temp;
      return true;
    }
  }

  preOrderPrint(currentNode) {
    if (currentNode) {
      console.log(currentNode.value);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.value);
      this.inOrderPrint(currentNode.rightChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode) {
      this.inOrderPrint(currentNode.leftChild);
      this.inOrderPrint(currentNode.rightChild);
      console.log(currentNode.value);
    }
  }
}

export default BinarySearchTree;
