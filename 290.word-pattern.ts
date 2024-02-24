function wordPattern(pattern: string, s: string): boolean {
  const hashMap = new Map<string, string>();
  const hasSeen = new Set<string>();
  const sSplit = s.split(' ');

  if (pattern.length !== sSplit.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (
      !hashMap.has(pattern[i])
      && !hasSeen.has(sSplit[i])
    ) {
      hashMap.set(pattern[i], sSplit[i]);
      hasSeen.add(sSplit[i]);
    }

    if (
      !hashMap.has(pattern[i])
      && hasSeen.has(sSplit[i])
    ) {
      return false;
    }
    
    if (
      hashMap.has(pattern[i])
      && hashMap.get(pattern[i]) !== sSplit[i]
    ) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog")) // true
console.log(wordPattern("abba", "dog cat cat fish")) // false
console.log(wordPattern("aaaa", "dog cat cat dog")) // false
console.log(wordPattern("abba", "dog dog dog dog")) // false
console.log(wordPattern("abc", "b c a")) // true
console.log(wordPattern("ab", "b c")) // true