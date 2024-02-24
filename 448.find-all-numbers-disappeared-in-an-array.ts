function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length;
  
  const numMap = new Set<number>();

  for (let i = 0; i < length; i++) {
    numMap.add(i + 1);
  }

  for (let i = 0; i < length; i++) {
    numMap.delete(nums[i]);
  }

  return [...numMap];
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5,6]
console.log(findDisappearedNumbers([1,1])) // [2]
console.log(findDisappearedNumbers([1])) // []