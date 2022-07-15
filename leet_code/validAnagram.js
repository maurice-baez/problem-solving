"use strict";

/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

const freqCounter = (str) => {
  let counter = {};

  for (let ltr of str) {
    if (counter[ltr]) {
      counter[ltr]++;
    } else {
      counter[ltr] = 1;
    }
  }
  return counter;
};

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  str1Counter = freqCounter(str1);
  str2Counter = freqCounter(str2);

  for (let ltr in str1Counter) {
    if (str1Counter[ltr] !== str2Counter[ltr]) return false;
  }
  return true;
};
