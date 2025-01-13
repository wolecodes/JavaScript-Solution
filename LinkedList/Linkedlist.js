class LinkedList {
  constructor() {
    this.head = null;
  }
  //Adding to the first node, assuming the head node is null;
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  addLast(node) {
    if (!this.head) {
      this.head = node;
    } else {
      let ptr = this.head;

      while (ptr.next) {
        ptr = ptr.next;
      }
      ptr.next = node;
    }
  }
  indexOf(node) {
    let index = 0;

    let ptr = this.head;

    while (ptr) {
      if (ptr === node) {
        return index;
      }
      ptr = ptr.next;
      index++;
    }
    return -1;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let node = this.head;
    let currentIndex = 0;

    while (node !== null && currentIndex > index) {
      node = node.next;

      currentIndex++;
    }
    node.next = node.next.next;
  }
}

module.exports = LinkedList;

