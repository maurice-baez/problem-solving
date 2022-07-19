"use strict";

/** Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree. */

const treeValueCount = (root, target) => {
  if (!root) return 0;

  const curr = root.val === target ? 1 : 0;
  const leftPath = treeValueCount(root.left, target);
  const rightPath = treeValueCount(root.right, target);
  return curr + leftPath + rightPath;
};
