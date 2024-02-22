/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

function isAnagram(s: string, t: string): boolean {
  if (s.split('').sort().join('') === t.split('').sort().join('')) { return true; } 
  return false;
};

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false
console.log(isAnagram("a", "ab")) // false
console.log(isAnagram("a", "a")) // true
console.log(isAnagram("a", "b")) // false