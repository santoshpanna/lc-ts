/**
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

/**
  Initialize an element m and a counter i with i = 0
  For each element x of the input sequence:
    If i = 0, then assign m = x and i = 1
    else if m = x, then assign i = i + 1
    else assign i = i − 1
  Return m
*/
function majorityElement(nums: number[]): number {
  let count = 0;
  let number = 0;

  for (const num of nums) {
    if (count === 0) {
      number = num;
      count++;
    } else if (number === num) {
      count++;
    } else {
      count--;
    }
  }

  return number;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))