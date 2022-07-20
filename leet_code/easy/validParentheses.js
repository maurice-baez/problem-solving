const isValid = (str) => {
  const stack = [];

  const closeToOpen = {
    ")": "(",
    "}": "{",
    "[": "]",
  };

  for (let char of str) {
    if (char in closeToOpen && stack.length) {
      if (closeToOpen[char] === stack[stack.length - 1]) {
        stack.pop();
      } else return false;
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
};
