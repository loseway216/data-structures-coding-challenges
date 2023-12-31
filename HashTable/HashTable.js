class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.next = null;
  }
}

class HashTable {
  constructor() {
    this.slots = 10;
    this.size = 0;
    this.bucket = [];
    for (let i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
    this.threshold = 0.6;
  }

  // hash function
  getIndex(key) {
    return Math.abs(key % this.slots);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  insert(key, value) {
    const index = this.getIndex(key);
    if (this.bucket[index] == null) {
      this.bucket[index] = new HashEntry(key, value);
      // console.log(String(key) + ", " + String(value) + " - inserted.");
    } else {
      let head = this.bucket[index];
      while (head) {
        if (head.key === key) {
          head.value = value;
          break;
        } else if (head.next == null) {
          head.next = new HashEntry(key, value);
          // console.log(String(key) + ", " + String(value) + " - inserted.");
          break;
        }
        head = head.next;
      }
    }

    this.size += 1;
    const load_factor = Number(this.size) / Number(this.slots);
    if (load_factor >= this.threshold) {
      this.resize();
    }
  }

  search(key) {
    const index = this.getIndex(key);
    let head = this.bucket[index];

    while (head) {
      if (head.key == key) {
        return head.value;
      }
      head = head.next;
    }

    return null;
  }

  deleteVal(key) {
    const index = this.getIndex(key);
    let head = this.bucket[index];

    // if key exists at first slot
    if (head.key == key) {
      this.bucket[index] = head.next;
      // console.log("Key deleted");
      this.size -= 1;
      return this;
    }

    let prev = null;
    while (head) {
      if (head.key == key) {
        prev.next = head.next;
        // console.log("Key deleted");
        this.size -= 1;
        return this;
      }
      prev = head;
      head = head.next;
    }

    //If key does not exist
    // console.log("Key not found");
    return null;
  }

  resize() {
    const new_slots = this.slots * 2;
    const new_bucket = [];
    for (let i = 0; i < new_slots; i++) {
      new_bucket[i] = null;
    }
    this.slots = new_slots;

    for (let i = 0; i < this.bucket.length; i++) {
      let head = this.bucket[i];
      while (head) {
        const new_index = this.getIndex(head.key);
        let node = new_bucket[new_index];
        if (node == null) {
          new_bucket[new_index] = new HashEntry(head.key, head.value);
        } else {
          while (node) {
            if (node.key == head.key) {
              node.value = head.value;
            } else if (node.next == null) {
              node.next = new HashEntry(head.key, head.value);
            }
            node = node.next;
          }
        }
        head = head.next;
      }
    }

    this.bucket = new_bucket;
  }
}

export default HashTable;
