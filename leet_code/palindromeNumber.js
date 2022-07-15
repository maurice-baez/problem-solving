"use strict";

/** Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */

const isPalindrome = function (num) {
  const numToString = num.toString();

  return Number(numToString.split("").reverse().join("")) === num;
};
