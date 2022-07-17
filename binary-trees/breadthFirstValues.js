"use strict";

/** Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order. */

const breadthFirstValues = (root) => {
  if (!root) return [];

  const values = [];
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();

    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values;
};
