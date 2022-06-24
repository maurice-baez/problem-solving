"use strict";

/** Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 */

// a->b->c->d
// d->c->b->a

//current = head;
//prev
//next

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// test_00:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a

// test_01:

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

reverseList(x); // y -> x

// test_02:

const p = new Node("p");

// p

reverseList(p); // p
