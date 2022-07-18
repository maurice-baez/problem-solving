"use strict";

/** Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree. */

const treeMinValue = (root) => {
  if (!root) return Infinity;

  return Math.min(root.val, treeMinValue(root.right), treeMinValue(root.left));
};
