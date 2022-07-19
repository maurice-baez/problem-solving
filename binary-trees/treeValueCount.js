"use strict";

/** Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree. */

const treeValueCount = (root, target) => {
  if (!root) return 0;

  let count = 0;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    if (current.val === target) {
      count += 1;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return count;
};
