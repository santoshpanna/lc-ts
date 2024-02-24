/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.
*/

function intToRoman(num: number): string {
  let numCopied = num;

  let romanString = '';

  while (numCopied > 0) {
    if (numCopied / 1000 >= 1) {
      romanString += 'M';
      numCopied = numCopied - 1000;
    } else if (numCopied / 900 >= 1) {
      romanString += 'CM';
      numCopied = numCopied - 900;
    } else if (numCopied / 500 >= 1) {
      romanString += 'D';
      numCopied = numCopied - 500;
    } else if (numCopied / 400 >= 1) {
      romanString += 'CD';
      numCopied = numCopied - 400;
    } else if (numCopied / 100 >= 1) {
      romanString += 'C';
      numCopied = numCopied - 100;
    } else if (numCopied / 90 >= 1) {
      romanString += 'XC';
      numCopied = numCopied - 90;
    } else if (numCopied / 50 >= 1) {
      romanString += 'L';
      numCopied = numCopied - 50;
    } else if (numCopied / 40 >= 1) {
      romanString += 'XL';
      numCopied = numCopied - 40;
    } else if (numCopied / 10 >= 1) {
      romanString += 'X';
      numCopied = numCopied - 10;
    } else if (numCopied / 9 >= 1) {
      romanString += 'IX';
      numCopied = numCopied - 9;
    } else if (numCopied / 5 >= 1) {
      romanString += 'V';
      numCopied = numCopied - 5;
    } else if (numCopied / 4 >= 1) {
      romanString += 'IV';
      numCopied = numCopied - 4;
    } else if (numCopied / 1 >= 1) {
      romanString += 'I';
      numCopied = numCopied - 1;
    }
  }

  return romanString;
};

console.log(intToRoman(1))
console.log(intToRoman(3))
console.log(intToRoman(58))
console.log(intToRoman(1994))