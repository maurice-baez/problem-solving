"use strict";

/** Given a string str, find the length of the longest substring without repeating characters. */

// two pointers
// initialize i @ begining of array, j @ i + 1
// initialize a max variable that will be returned at the end

// begin iterating through string
// initialize empty set
// check that chars at i and j are not in set
// if not --> add them to set, increment j by 1
// if they are --> increment i to j and j ++
//check currStreak against max
//return max

const longestSubstring = (str) => {
  let i = 0;
  let j = 1;

  let max = 0;

  while (j < str.length) {
    let set = new Set(str[i]);

    while (!set.has(str[j]) && j < str.length) {
      set.add(str[j]);
      j++;
    }
    max = Math.max(max, j - i);
    i = j;
    j++;
  }
  return max;
};
