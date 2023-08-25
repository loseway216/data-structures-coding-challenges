class TrieNode {
  constructor(char) {
    this.char = char;
    this.isEndKey = false;
    this.children = new Array(26).fill(null);
  }

  markAsLeaf() {
    this.isEndWord = true;
  }

  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  // class Trie {
  constructor() {
    this.root = new TrieNode("");
  }

  getIndex(s) {
    return s.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(key) {
    //None keys are not allowed
    if (key == null) {
      return;
    }

    key = key.toLowerCase();
    let currentNode = this.root;

    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (let level = 0; level < key.length; level++) {
      const index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(key[level]);
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
  }

  search(key) {
    if (key == null) {
      return false;
    }

    let currentNode = this.root;

    //Iterate the Trie with given character index,
    //If it is null at any point then we stop and return false
    for (let level = 0; level < key.length; level++) {
      const index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }

    //We will return true only if we reach leafNode and have traversed the
    //Trie based on the length of the key
    if (currentNode && currentNode.isEndWord) {
      return true;
    }

    return false;
  }

  delete(key) {
    if (this.root == null || key == null) {
      return;
    }
    this.deleteHelper(key, this.root, key.length, 0);
  }

  deleteHelper(key, currentNode, length, level) {
    let deletedSelf = false;

    //Base Case: If we have reached at the node which points to the alphabet at the end of the key.
    if (level == length) {
      //If there are no nodes ahead of this node in this path
      //Then we can delete this node
      if (this.hasNoChildren(currentNode)) {
        currentNode = null;
        deletedSelf = true;
      }
      //If there are nodes ahead of currentNode in this path
      //Then we cannot delete currentNode. We simply unmark this as leaf
      else {
        currentNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    } else {
      const childNode = currentNode.children[this.getIndex(key[level])];
      const childDeleted = this.deleteHelper(key, childNode, length, level + 1);

      if (childDeleted) {
        //Making children pointer also None: since child is deleted
        currentNode.children[this.getIndex(key[level])] = null;
        //If currentNode is leaf node that means currentNode is part of another key
        //and hence we can not delete this node and it's parent path nodes
        if (currentNode.isEndWord) {
          deletedSelf = false;
        }
        //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
        //So, we cannot delete currentNode
        else if (this.hasNoChildren(currentNode) == false) {
          deletedSelf = false;
        }
        //Else we can delete currentNode
        else {
          currentNode = null;
          deletedSelf = true;
        }
      } else {
        deletedSelf = false;
      }
    }
    return deletedSelf;
  }

  hasNoChildren(currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] != null) {
        return false;
      }
    }
    return true;
  }
}

export default Trie;
