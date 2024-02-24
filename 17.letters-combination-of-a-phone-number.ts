/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

function letterCombinations(digits: string): string[] {
  const letters: string[][] = [];
  let result: string[] = [];

  const t9 = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  let i = 0

  while (i < digits.length) {
    letters.push(t9[digits[i]]);

    if (i === 0) {
      result.push(...t9[digits[i]]);
    } else {
      const tempResult: string[] = [];

      for (let letterIterator = 0; letterIterator < result.length; letterIterator++) {
        for (let tempLetterIterator = 0; tempLetterIterator < t9[digits[i]].length; tempLetterIterator++) {
          tempResult.push(result[letterIterator] + t9[digits[i]][tempLetterIterator]);
        }
      }

      result = tempResult;
    }

    i++;
  }

  return result;
};

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
console.log(letterCombinations('234'))