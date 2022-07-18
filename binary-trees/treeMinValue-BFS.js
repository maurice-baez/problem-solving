"use strict";

/** Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree. */

//BFS

const treeMinValue = (root) => {
  if (!root) return null;
  let minValue = Infinity;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    minValue = Math.min(current.val, minValue);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return minValue;
};
