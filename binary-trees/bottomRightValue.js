"use strcit";

/** Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty. */

//BREADTH FIRST SEARCH

const bottomRightValue = (root) => {
  if (!root) return null;

  const queue = [root];
  let current = null;

  while (queue.length) {
    current = queue.shift();

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return current.val;
};
