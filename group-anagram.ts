/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, string[]> = new Map();

  const length = strs.length;

  let count = 0;

  while (count < length) {
    const sortedKey = strs[count].split('').sort().join('');
    
    if (anagramMap.has(sortedKey)) {
      anagramMap.get(sortedKey)?.push(strs[count]);
    } else {
      anagramMap.set(sortedKey, [strs[count]]);
    }

    count++;
  }

  return Array.from(anagramMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))