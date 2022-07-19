"use strict";

/** Given the head of a singly linked list, reverse the list, and return the reversed list.

 */

const reverseList = function (head) {
  if (!head) return null;
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;

    current = next;
  }
  return prev;
};
