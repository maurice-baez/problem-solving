"use strict";

/** Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;

  let current = head;
  let prev = null;

  while (current) {
    if (current.val === targetVal) {
      next = current.next;
      prev.next = next;
      current.next = null;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
};
