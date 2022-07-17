"use strict";

/** Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order. */

// const depthFirstValues = (root, values = []) => {
//   if(!root) return [];

//   values.push(root.val);

//   if(root.left) depthFirstValues(root.left, values);
//   if(root.right) depthFirstValues(root.right, values);

//   return values;
// }

const depthFirstValues = (root) => {
  if (!root) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
