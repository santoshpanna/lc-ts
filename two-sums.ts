/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];

  const negativeNums: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff: number = target - nums[i];

    if (negativeNums.has(diff)) {
      return [i, negativeNums.get(diff) as number];
    } else {
      negativeNums.set(nums[i], i);
    }
  }

  return result;
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))