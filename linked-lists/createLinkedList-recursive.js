"use strict";

/** Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list. */

//recursive

// const createLinkedList = (values) => {
//   if(!values.length) return null;
//   let head = new Node(values[0]);
//   head.next = createLinkedList(values.slice(1));
//   return head;
// };

const createLinkedList = (values, idx = 0) => {
  if (idx === values.length) return null;
  let head = new Node(values[idx]);
  head.next = createLinkedList(values, idx + 1);
  return head;
};
