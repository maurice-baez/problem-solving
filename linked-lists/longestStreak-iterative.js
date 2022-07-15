"use strict";

/** Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let longest = 0;
  let current = head;

  while (current) {
    let currentStreak = 1;

    while (current.next) {
      if (current.next.val === current.val) {
        currentStreak++;
        current = current.next;
      } else break;
    }
    current = current.next;
    longest = Math.max(currentStreak, longest);
  }
  return longest;
};
