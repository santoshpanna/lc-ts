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

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

function romanToInt(s: string): number {
  const romanDict = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  };

  let number = 0;
  let negative = 0;

  let length = s.length;

  let i = 0;

  while (i < length) {
    const currentNumber = romanDict[s[i]];
    const nextNumber = romanDict[s[i+1]]

    if (currentNumber < nextNumber) {
      negative += currentNumber;
    } else {
      number += currentNumber - negative;
      negative = 0;
    }

    i++;
  }

  return number;
};

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))