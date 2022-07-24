"use strict";

/** Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1. */

const howHigh = (root) => {
  if (!root) return -1;
  return 1 + Math.max(howHigh(root.left), howHigh(root.right));
};
