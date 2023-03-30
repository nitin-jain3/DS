function Node(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

const a = new Node(1);
const b = new Node(2, a);
const c = new Node(3, b);
// Created a circular linked list;
a.next = c;

const detectCycle = (c) => {
    let node = c;
    while (!!node) {
          if(node.visited) {
            return node;
          } else {
            node.visited = true;
            node = node.next;
          }
    }
    return null;
}

detectCycle(c);