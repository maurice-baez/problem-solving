"use strict";

/** Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.*/

// const addLists = (head1, head2) => {
//   let num1 = [];
//   let num2 = [];
//   let current1 = head1;
//   let current2 = head2;

//   while (current1) {
//     num1.unshift(current1.val);
//     current1 = current1.next;
//   }

//   while (current2) {
//     num2.unshift(current2.val);
//     current2 = current2.next;
//   }

//   let sum = (Number(num1.join("")) + Number(num2.join(""))).toString();
//   let dummyHead = new Node(null);
//   let tail = dummyHead;

//   for (let i = sum.length - 1; i >= 0; i--) {
//     tail.next = new Node(Number(sum[i]));
//     tail = tail.next;
//   }
//   return dummyHead.next;
// };

const addLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;
  let carry = 0;

  while (current1 || current2) {
    let current1Val = current1 ? current1.val : 0;
    let current2Val = current2 ? current2.val : 0;

    let sum = current1Val + current2Val + carry;

    if (sum > 9) {
      tail.next = new Node(sum % 10);
      carry = 1;
    } else {
      tail.next = new Node(sum);
      carry = 0;
    }

    tail = tail.next;

    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }

  if (carry) tail.next = new Node(1);

  return dummyHead.next;
};
