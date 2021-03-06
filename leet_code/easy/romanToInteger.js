"use strict";

/** Given a roman numeral, convert it to an integer. */

const romanToInt = (s) => {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        result += 4;
        i++;
      } else if (s[i + 1] === "X") {
        result += 9;
        i++;
      } else {
        result += 1;
      }
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        result += 40;
        i++;
      } else if (s[i + 1] === "C") {
        result += 90;
        i++;
      } else {
        result += 10;
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        result += 400;
        i++;
      } else if (s[i + 1] === "M") {
        result += 900;
        i++;
      } else {
        result += 100;
      }
    } else {
      result += values[s[i]];
    }
  }

  return result;
};
