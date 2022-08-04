"use strict";

/** Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level. */

const levelAverages = (root) => {
  const levels = [];
  const stack = [{ node: root, level: 0 }];

  while (stack.length) {
    const { node, level } = stack.pop();

    if (levels[level]) {
      levels[level].push(node.val);
    } else {
      levels[level] = [node.val];
    }
    if (node.right) stack.push({ node: node.right, level: level + 1 });
    if (node.left) stack.push({ node: node.left, level: level + 1 });
  }

  const averages = [];

  for (let level of levels) {
    let sum = 0;
    let count = 0;
    for (let num of level) {
      sum = sum + num;
      count + 1;
    }
    const average = sum / count;
    averages.push(average);
  }

  return averages;
};
