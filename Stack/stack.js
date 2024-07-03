"use strict";
const { MAX_STACK_SIZE } = require("./config");

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (this.items.length === MAX_STACK_SIZE) {
      throw new Error("max stack size exceeded");
    }
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Pop underflow");
    }
    return this.items.pop();
  }
  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}
