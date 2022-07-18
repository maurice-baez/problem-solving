"use strict";

/** A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

// const isPalindrome = (str) => {
//   const regex = /[^A-Za-z0-9]/g;
//   const parsedStr = str.toLowerCase().replace(regex, "", " ", "");

//   return parsedStr === Array.from(parsedStr).reverse().join("");
// };

const isPalindrome = (str) => {
  const regex = /[^A-Za-z0-9]/g;
  const parsedStr = str.toLowerCase().replace(regex, "", " ", "");

  let i = 0;
  let j = parsedStr.length - 1;

  while (i < j) {
    if (parsedStr[i] !== parsedStr[j]) return false;
    i++;
    j--;
  }
  return true;
};
