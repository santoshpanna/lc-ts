/**
 * 
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 */

function sum(nums: number[], startIndex: number, endIndex: number) {
  return nums.slice(startIndex, endIndex + 1).reduce((sum, num) => sum+num, 0);
}

function pivotIndex(nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let midIndex = 0;
  
  while(midIndex < nums.length) {
    const leftSum = sum(nums, leftIndex, midIndex - 1);
    const rightSum = sum(nums, midIndex + 1, rightIndex);
    // console.log('🚀 ~ leftSum:', leftIndex, midIndex-1, leftSum);
    // console.log('🚀 ~ rightSum:', midIndex+1, rightIndex, rightSum, '\n\n');

    if (leftSum === rightSum) {
      return midIndex;
    } else {
      midIndex++;
    } 
  }

  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([2,1,-1])); // 0
console.log(pivotIndex([-1,-1,0,1,1,0])); // 5
console.log(pivotIndex([-1,-1,-1,-1,0,1])); // 1
console.log(pivotIndex([-1,-1,-1,-1,-1,0])); // 2
