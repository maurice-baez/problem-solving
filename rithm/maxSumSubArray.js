"use strict";

/** Write a function called maxSubarraySum, which accepts an array of integers and a number representing the length of a subarray.

The function should return the largest sum of a contiguous subarray with the given length.

Note that a subarray must consist of consecutive elements from the original arr */

// const maxSubArray = (nums, k) => {
//   if (k > nums.length) return null;

//   let maxSum = -Infinity;

//   for (let i = 0; i <= nums.length - k; i++) {
//     let currSum = 0;
//     for (let j = i; j < i + k; j++) {
//       currSum += nums[j];
//     }
//     maxSum = Math.max(currSum, maxSum);
//   }
//   return maxSum;
// };

function maxSubarrSum(arr, k) {
  let maxSum = 0;

  // get the sum of the first three numbers to start
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  let currentSum = maxSum;

  // starting after the first sum, compute the rest
  for (let i = k; i < arr.length; i++) {
    // current window adds new element and chops off left
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
