"use strict";

/** Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree. */

//DFS

const treeMinValue = (root) => {
  if (!root) return null;

  let minValue = Infinity;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    minValue = Math.min(minValue, current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return minValue;
};
