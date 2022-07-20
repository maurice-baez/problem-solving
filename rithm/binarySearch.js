"use strict";

const binarySearch = (nums, val) => {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (left <= right) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    let midValue = nums[midIdx];

    if (midValue > val) {
      rightIdx = midIdx - 1;
    } else if (midValue < val) {
      leftIdx = midIdx + 1;
    } else {
      return midIdx;
    }
  }
  return -1;
};
