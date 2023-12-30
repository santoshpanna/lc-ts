/**
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */


function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];

  let [leftIndex, rightIndex] = [0, nums.length - 1];

  while (leftIndex <= rightIndex) {
    if (Math.abs(nums[leftIndex]) > Math.abs(nums[rightIndex])) {
      result.unshift(nums[leftIndex] * nums[leftIndex])
      leftIndex++;
    } else {
      result.unshift(nums[rightIndex] * nums[rightIndex]);
      rightIndex--;
    }
  }

  return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));