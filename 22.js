class NestedIterator {
  constructor(nestedList) {
    this.stack = [];
    // Flatten the nestedList and push the elements into the stack in reverse order
    for (let i = nestedList.length - 1; i >= 0; i--) {
      this.stack.push(nestedList[i]);
    }
  }

  hasNext() {
    while (this.stack.length > 0) {
      if (this.stack[this.stack.length - 1].isInteger()) {
        return true;
      } else {
        // If the top element is a nested list, flatten it and push the elements into the stack in reverse order
        let nestedList = this.stack.pop().getList();
        for (let i = nestedList.length - 1; i >= 0; i--) {
          this.stack.push(nestedList[i]);
        }
      }
    }
    return false;
  }

  next() {
    if (this.hasNext()) {
      return this.stack.pop().getInteger();
    }
  }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
