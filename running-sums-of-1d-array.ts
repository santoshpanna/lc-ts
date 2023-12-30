/**
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */

function runningSum(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const result: number[] = [nums[0]];

  for (let i = 1; i< nums.length; i++) {
    result[i] = nums[i] + result[i - 1];
  }

  return result;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))