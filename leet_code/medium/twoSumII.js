"use strict";

/** Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space. */

//2 pointers
//i=0, j=array length - 1
//initiate while i<=j
//compute i+j
//if sum === target -> return [i+1, j+1]
//if sum < target -> add. 1 to i
//if sum > target -> subtract 1 from j

const twoSum = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === target) return [i + 1, j + 1];
    else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
};
