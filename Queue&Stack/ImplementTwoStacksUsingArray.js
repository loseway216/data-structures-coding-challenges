// Implement Two Stacks using One Array
export default class twoStacks {
  constructor(s) {
    this.size = s;
    this.arr = [];
    this.index1 = -1;
    this.index2 = s;
  }

  push1(value) {
    if (this.index1 > this.index2 - 1) {
      return -1;
    }
    this.index1++;
    this.arr[this.index1] = value;
  }

  push2(value) {
    if (this.index1 > this.index2 - 1) {
      return -1;
    }
    this.index2--;
    this.arr[this.index2] = value;
  }

  pop1() {
    if (this.index1 == -1) {
      return null;
    }
    const value = this.arr[this.index1];
    this.arr[this.index1] = 0;
    this.index1--;
    return value;
  }

  pop2() {
    if (this.index2 == this.size) {
      return null;
    }
    const value = this.arr[this.index2];
    this.arr[this.index2] = 0;
    this.index2++;
    return value;
  }
}
