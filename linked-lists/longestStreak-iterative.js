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
  let longestStreak = 0;
  let currentStreak = 0;
  let current = head;
  let prevVal = null;

  while (current) {
    if (current.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
    prevVal = current.val;
    current = current.next;
  }
  return longestStreak;
};
