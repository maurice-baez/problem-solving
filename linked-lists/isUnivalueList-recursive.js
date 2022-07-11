"use strict";

/** Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  if (!head) return true;

  if (head.next) {
    if (head.val !== head.next.val) return false;
  }
  return isUnivalueList(head.next);
};
