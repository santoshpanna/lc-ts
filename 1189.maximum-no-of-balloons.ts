function maxNumberOfBalloons(text: string): number {
  const hashMap = new Map<string, number>();

  for (let i=0; i < text.length; i++) {
    const textIncludes = 'balon'.includes(text[i]);
    if (
      textIncludes
      && hashMap.has(text[i])
    ) {
      hashMap.set(text[i], hashMap.get(text[i])! + 1)
    } else if (
      textIncludes
    ) {
      hashMap.set(text[i], 1);
    }
  }

  let min = Number.MAX_SAFE_INTEGER;

  if (hashMap.has('l')) {
    hashMap.set('l', hashMap.get('l')! / 2);
  }
  
  if (hashMap.has('o')) {
    hashMap.set('o', hashMap.get('o')! / 2);
  }

  for (const [ch, count] of hashMap) {
    if (min > count) {
      min = count
    }
  }

  return hashMap.size === 5 ? Math.floor(min) : 0;
};

console.log(maxNumberOfBalloons("nlaebolko")) // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")) // 2
console.log(maxNumberOfBalloons("leetcode")) // 0
console.log(maxNumberOfBalloons("balon")) // 0
console.log(maxNumberOfBalloons("balloon")) // 1
console.log(maxNumberOfBalloons("lloo")) // 0