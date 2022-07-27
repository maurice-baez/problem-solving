"use strict";

/** given a sorted array of integers arr, and an integer target, find the index of the first and last position of target in arr. If target can't be found in arr, return [-1, -1] */

// [1, 3, 4, 5, 5, 5, 5, 6, 9], 5 --> [3, 6]
// [3, 5, 6, 8, 10], 7 --> [-1, -1]

// two pointers
// set i = 0, j = arr.length -1
//initial start and end

// iterate
// find middle of array, check value against target
// do bsearch until value found, iterate left till start found, then iterate forward till end found

// if value not found return [-1, -1]

const firstLastPosition = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  let start = null;
  let end = null;

  while (i <= j) {
    let middleIdx = Math.floor((i + j) / 2);
    let midVal = arr[middleIdx];

    if (midVal > target) {
      j = middleIdx - 1;
    } else if (midVal < target) {
      i = middleIdx + 1;
    } else {
      while (arr[middleIdx] === target) {
        middleIdx--;
      }
      start = middleIdx + 1;
      end = start;

      while (arr[end] === target) {
        end++;
      }
      end = end - 1;
      return [start, end];
    }
  }
  return [-1, -1];
};
