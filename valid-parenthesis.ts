/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean {
  let stack: string[] = [];

  const oppMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const validParenthesis = ['(', '[', '{'];

  const length = s.length;

  let i = 0;

  while (i < length) {
    if (validParenthesis.includes(s[i])) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === oppMap[s[i]]) {
      stack = stack.slice(0, -1);
    } else {
      return false;
    }
    i++;
  }

  if (stack.length) {
    return false;
  }

  return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));