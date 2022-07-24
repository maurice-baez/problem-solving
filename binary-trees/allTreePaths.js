"use strict";

/** Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty. */

const allTreePaths = (root) => {
  if (!root) return [];

  if (!root.left && !root.right) return [[root.val]];

  const leftPath = allTreePaths(root.left);
  const rightPath = allTreePaths(root.right);

  let paths = [];

  for (let subPath of leftPath) {
    paths.push([root.val, ...subPath]);
  }
  for (let subPath of rightPath) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};
