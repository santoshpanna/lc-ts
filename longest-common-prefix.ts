/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  if (strs.length === 1) {
    return strs[0]
  }

  let i =0;

  while (i < strs.length && prefix.length > 0) {
    if (strs[i].startsWith(prefix)) {
      i++;
    } else {
      prefix = prefix.slice(0, -1);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));