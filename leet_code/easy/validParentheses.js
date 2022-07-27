"use strict";

/** Given a string str containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

// create map of closing bracket and corresponding open.
// initialize empty stack

// iterate through str
// check if char is an open or close bracket
//if open --> add it to stack
// if close --> pop item from top of stack off and ensure the char matches its correpsong open bracket
// if not --> return false

// after iteration finished, check stack length, if empty return true, else false

const validParentheses = (str) => {
  const match = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let char of str) {
    if (!match[char]) {
      stack.push(char);
    } else {
      const curr = stack.pop();
      if (curr !== match[char]) return false;
    }
  }
  return !stack.length;
};
