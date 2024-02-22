function getConcatenation(nums: number[]): number[] {
  let result = [...nums];

  for (let i = 0; i< nums.length; i++) {
    result.push(nums[i]);
  }

  return result;
};