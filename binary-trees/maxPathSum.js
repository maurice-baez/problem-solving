"use strict";

/** Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree. */

const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;

  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );

  return root.val + maxChildPathSum;
};
