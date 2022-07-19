"use strict";

/** Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values. */

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (!result) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};
