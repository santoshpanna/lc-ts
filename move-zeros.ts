/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */

/**
 Do not return anything, modify nums in-place instead.
*/
function moveZeroes(nums: number[]): void {
  if (nums.length >= 2) {
    let leftIndex = 0;
    let rightIndex = 1;
    while(nums[leftIndex] !== 0 && leftIndex < nums.length) {
      leftIndex++;
    }
    
    rightIndex = leftIndex+1;

    while(rightIndex < nums.length) {
      if (nums[rightIndex] === 0) {
        rightIndex++;
        console.log('++', rightIndex);
      } else {
        nums[leftIndex] = nums[rightIndex];
        nums[rightIndex] = 0;
        leftIndex++;
      }
    }
  }
};

moveZeroes([0,1,0,3,12]);
moveZeroes([0]);
moveZeroes([2,1]);