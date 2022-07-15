"use strict";

/** Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list. */

const insertNode = (head, value, index) => {
  let current = head;
  let idx = 0;
  let newNode = new Node(value);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  while (current) {
    if (index - 1 === idx) {
      next = current.next;
      current.next = newNode;
      newNode.next = next;
      break;
    }
    idx++;
    current = current.next;
  }
  return head;
};
