"use strict";

/** Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order. */

const depthFirstValues = (root) => {
  if (!root) return [];

  const values = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    values.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return values;
};
