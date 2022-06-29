"use strict";

/** Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

 */

// 1 -> 2 -> 3 -> "a" -> "b"
// 4 -> 5 -> 6
// 1 -> 4 -> 2 -> 5 -> 3 -> 6 -> "a" -> "b"

// 2 pointers: 1 -> curr1(head1 list), 2 -> curr2(head2 list)
// var to keep track of whose turn: initialize to "one"

//while curr1 or curr2 not null:
// if turn = "one"  --> make next var=curr1.next, curr1.next = curr2, assign curr1 to next. change turn var.
// if turn = "two" --> make next var=curr2.next, curr2.next = curr1, assign curr2 to next. change turn var.

//if we exit loop, the current node should be part of the longer list, thus will be already pointing at the remaining nodes.

//return head1

const zipperLists = (head1, head2) => {
  let curr1 = head1;
  let curr2 = head2;
  let turn = "one";

  while (curr1 && curr2) {
    if (turn === "one") {
      const next = curr1.next;
      curr1.next = curr2;
      curr1 = next;
      turn = "two";
    } else if (turn === "two") {
      const next = curr2.next;
      curr2.next = curr1;
      curr2 = next;
      turn = "one";
    }
  }

  return head1;
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
// const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
// const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

// test_01:

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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

// test_02:

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

// test_03:

// const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

zipperLists(w, one);
// w -> 1 -> 2 -> 3

// test_04:

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
