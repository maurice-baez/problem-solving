"use strict";

/** Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list. */

const createLinkedList = (values) => {
  let head = null;
  let current = head;

  for (let val of values) {
    let node = new Node(val);
    if (!head) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = current.next;
    }
  }

  return head;
};
