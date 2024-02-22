function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  let offset = 1;

  while(s[i] === ' ') {
    i--;
    offset++;
  }
  
  for (; i >= 0; i--) {
    if (s[i] === ' ') {
      break;
    }
  }

  return s.length - i - offset;
};

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("Hello")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6