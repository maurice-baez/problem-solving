"use strict";

/**
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.*/

const treeSum = (root) => {
  if (!root) return 0;

  let sum = 0;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return sum;
};
