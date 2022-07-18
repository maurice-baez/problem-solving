"use strict";

/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

const freqCounter = (str) => {
  let counter = {};

  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return counter;
};

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const str1Counter = freqCounter(str1);

  for (let char of str2) {
    if (!str1Counter[char]) return false;
    str1Counter[char]--;
  }
  return true;
};
