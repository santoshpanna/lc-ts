function isIsomorphic(s: string, t: string): boolean {
  const chMap = new Map<string, string>();
  const hasBeenMapped = new Set<string>();

  let counterS = 0;
  let counterT = 0;

  if (s.length !== t.length) {
    return false;
  }

  for (; counterS < s.length, counterT < t.length; counterS++, counterT++) {
    if (
      (
        !chMap.has(s[counterS])
        && hasBeenMapped.has(t[counterT])
      ) || (
        chMap.has(s[counterS])
        && chMap.get(s[counterS]) !== t[counterT]
      )
    ) {
      return false;
    } else {
      hasBeenMapped.add(t[counterT]);
      chMap.set(s[counterS], t[counterT]);
    }
      
  }
      
  if (
    counterS === counterT
    && counterS === s.length
  ) {
    return true;
  }

  return false;
};

console.log(isIsomorphic("egg", "add")) // true
console.log(isIsomorphic("foo", "bar")) // false
console.log(isIsomorphic("paper", "title")) // true
console.log(isIsomorphic("ab", "aa")) // false