"use strict";

/** Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree. */

const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  return treeIncludes(root.right, target) || treeIncludes(root.left, target);
};
