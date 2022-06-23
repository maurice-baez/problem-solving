"use strict";

//from Structy

/** Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list. */

const linkedListValues = (head) => {
  let result = [];
  getValues(head, result);
  return result;
};

const getValues = (head, result) => {
  if (!head) return;
  result.push(head.val);
  getValues(head.next, result);
};

//test_00:

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

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

//test_01:
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

//test_02:
const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]

//test_03:
linkedListValues(null); // -> [ ]
