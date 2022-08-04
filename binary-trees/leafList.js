"use strict";

/** Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order. */

const leafList = (root) => {
  if (!root) return [];
  const results = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    if (!current.right && !current.left) {
      results.push(current.value);
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results;
};
