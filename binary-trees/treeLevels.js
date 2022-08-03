"use strict";

/** Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree. */

const treeLevels = (root) => {
  if (!root) return [];
  const stack = [{ node: root, level: 0 }];
  const result = [];

  while (stack.length) {
    const current = stack.pop();

    if (result[current.level]) {
      result[current.level].push(current.node.val);
    } else {
      result[current.level] = [current.node.val];
    }

    if (current.node.right)
      stack.push({ node: current.node.right, level: current.level + 1 });
    if (current.node.left)
      stack.push({ node: current.node.left, level: current.level + 1 });
  }
  return result;
};
