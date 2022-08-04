"use strict";

/** Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order. */

const leafList = (root, results = []) => {
  if (!root) return [];

  if (!root.right && !root.left) results.push(root.val);

  leafList(root.left, results);
  leafList(root.right, results);
  return results;
};
