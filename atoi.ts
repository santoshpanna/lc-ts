/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

    Read in and ignore any leading whitespace.
    Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
    Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
    Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
    Return the integer as the final result.

*/

function myAtoi(s: string): number {
  let length = s.length;
  let number = 0;
  let counter = 0;

  let hasEncounteredNumber = false;
  let hasEncounteredNegative = false;
  let hasEncounteredFloat = false;
  let hasEncounteredPositive = false;

  const INT_MAX = 2147483647;
  const INT_MIN = - INT_MAX - 1;

  const validChars = ['-', '+', '.'];
  const validNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i=0; i<length; i++) {
      const convertedNumber = Number(s[i]);

      if (hasEncounteredFloat && s[i] === '.') {
        return 0;
      }
      if (hasEncounteredNegative && s[i] === '-') {
        return 0;
      }
      if (hasEncounteredPositive && s[i] === '+') {
        return 0;
      }

      if (s[i] === '-') {
        hasEncounteredNegative = true;
      }
      
      if (s[i] === '+') {
        hasEncounteredPositive = true;
      }
      
      if (s[i] === '.') {
        hasEncounteredFloat = true;
      }      

      if (
        !hasEncounteredNumber
        && Number.isNaN(convertedNumber)
        && ![...validChars, ' '].includes(s[i])
      ) {
        return 0;
      }

      if (hasEncounteredPositive && hasEncounteredNegative) {
        return 0;
      }

      if (hasEncounteredNumber && ['+', '-'].includes(s[i])) {
        return 0;
      }

      if (
        validNumbers.includes(s[i])
      ) {
        if (!hasEncounteredNumber) {
          hasEncounteredNumber = true;
        }

        number = (number * 10) + convertedNumber; 

        if (hasEncounteredFloat) {
          counter++;
        }
      }

      if (hasEncounteredNumber && s[i] === '.') {
        hasEncounteredFloat = true;
        continue;
      }

      if (hasEncounteredNumber && s[i] === ' ') {
        break;
      }

      if (hasEncounteredNumber && Number.isNaN(convertedNumber)) {
        return hasEncounteredNegative ? 0 - number : number;
      }
  }

  if (hasEncounteredNegative) {
      number = 0 - number;
  }

  if (hasEncounteredFloat) {
    number = number / Math.pow(10, counter);
  }

  if (number > INT_MAX) {
    return INT_MAX;
  }

  if (number < INT_MIN) {
    return INT_MIN;
  }

  return number;
};

function myAtoi2(s: string): number {
  const regex = /^[\s]*([+-]?\d+.?\d*)*(?<!=[\w])/;
  const match = s.match(regex);

  const INT_MAX = Math.pow(2, 31);
  const INT_MIN = 0 - Math.pow(2, 31);
  
  let number = 0;

  if (match && match[1]) {
    number = Number(match[1]);
  }

  if (number > INT_MAX) {
    return INT_MAX;
  }

  if (number < INT_MIN) {
    return INT_MIN;
  }

  if (Number.isNaN(number)) {
    return 0;
  }

  return number;
}

function myAtoi3(s: string): number {
  let length = s.length;
  const INT_MAX = 2147483647;
  const INT_MIN = - INT_MAX - 1;

  let sign = 1;

  let i = 0;

  while (i < length && s[i] === ' ') {
    i++;
  }

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  let number = 0;

  while (i < length) {
    const convertedNumber = Number(s[i]);
  
    if (Number.isNaN(convertedNumber) || s[i] === ' ' || s[i] === '+' || s[i] === '-') {
      break;
    }

    number = (number * 10) + convertedNumber;

    if (number > INT_MAX) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    i++;
  }

  return number * sign;
}

console.log(myAtoi3("00000-42a1234"))
console.log(myAtoi3("-0012a42"))
console.log(myAtoi3("-5-"))
console.log(myAtoi3("+4289"))
console.log(myAtoi3("-42"))
console.log(myAtoi3("   42"))
console.log(myAtoi3("   48.97676237"))
console.log(myAtoi3("   -42"))
console.log(myAtoi3("with words 42"))
console.log(myAtoi3("   42 with words"))
console.log(myAtoi3("   words and 987"))
console.log(myAtoi3(" 0042"))
console.log(myAtoi3(" 400200"))