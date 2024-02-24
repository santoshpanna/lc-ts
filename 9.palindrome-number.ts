/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.
*/

function isPalindrome(x: number): boolean {
  const stringifiedNumber = x.toString();

  let start = 0;
  let end = stringifiedNumber.length - 1;

  while (start < end) {
    if (stringifiedNumber[start] !== stringifiedNumber[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(1)); // true
console.log(isPalindrome(11)); // true
console.log(isPalindrome(111)); // true
console.log(isPalindrome(1111)); // true
console.log(isPalindrome(11111)); // true
console.log(isPalindrome(111111)); // true
console.log(isPalindrome(1111111)); // true
console.log(isPalindrome(11111111)); // true