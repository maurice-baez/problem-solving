"use strict";

/** Write a function called maxSubarraySum, which accepts an array of integers and a number representing the length of a subarray.

The function should return the largest sum of a contiguous subarray with the given length.

Note that a subarray must consist of consecutive elements from the original arr */

const maxSubArray = (nums, k) => {
  if (k > nums.length) return null;

  let maxSum = -Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    let currSum = 0;
    for (let j = i; j < i + k; j++) {
      currSum += nums[j];
    }
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};
