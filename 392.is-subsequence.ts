function isSubsequence(s: string, t: string): boolean {
  let counter = 0;

  for (let i = 0; i< t.length; i++) {
    if (s[counter] === t[i]) {
      counter++;
    }
  }

  return counter === s.length;
};

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("abc", "ahbgdc")) // true