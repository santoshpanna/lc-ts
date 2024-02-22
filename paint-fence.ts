/*
You are painting a fence of n posts with k different colors. You must paint the posts following these rules:

  Every post must be painted exactly one color.
  There cannot be three or more consecutive posts with the same color.

Given the two integers n and k, return the number of ways you can paint the fence.
*/

// function numWays(n: number, k: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return k;
//   if (n === 2) return k * k;
//   return (k - 1) * (numWays(n - 1, k) + numWays(n - 2, k));
// };

function numWays(n: number, k: number): number {
  if (n === 0) return 0;
  if (n === 1) return k;
  if (n === 2) return k * k;

  const memo: number[] = new Array(n + 1).fill(0);
  memo[0] = 0;
  memo[1] = k;
  memo[2] = k * k;
  let counter = 2;

  while (counter <= n) {
    memo[counter] = (k - 1) * (memo[counter - 1] + memo[counter - 2]);
    counter += 1;
  }

  return memo[n] + memo[n - 1];
};

console.log(numWays(3, 2)) // 6
console.log(numWays(1, 1)) // 1
console.log(numWays(7, 2)) // 42
console.log(numWays(4, 2)) // 10
console.log(numWays(3, 1)) // 0
console.log(numWays(3, 3)) // 24
console.log(numWays(3, 4)) // 66
console.log(numWays(3, 5)) // 120