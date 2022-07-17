"use strict";

/** Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.*/

const addLists = (head1, head2, carry = 0) => {
  if (!head1 && !head2 && !carry) return null;

  const val1 = head1 ? head1.val : 0;
  const val2 = head2 ? head2.val : 0;

  const sum = val1 + val2 + carry;
  const digit = sum % 10;
  carry = sum > 9 ? 1 : 0;

  const resultNode = new Node(digit);

  const next1 = head1 ? head1.next : null;
  const next2 = head2 ? head2.next : null;

  resultNode.next = addLists(next1, next2, carry);

  return resultNode;
};
