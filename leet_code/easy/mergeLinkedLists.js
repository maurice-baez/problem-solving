"use strict";

/** You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/

const mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let dummyHead = new ListNode(null);
  let tail = dummyHead;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 && !current2) tail.next = current1;
  if (current2 && !current1) tail.next = current2;

  return dummyHead.next;
};
