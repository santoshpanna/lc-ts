function productExceptSelf(nums: number[]): number[] {
  let product = 0;
  let hasZero = false;
  let hasSecondZero = false;

  for (let i = 0; i< nums.length; i++) {
    if (product === 0 && nums[i] !== 0) {
      product = 1;
    }

    product *= nums[i] !== 0 ? nums[i] : 1;

    if (
      !hasZero && nums[i] === 0
    ) {
      hasZero = true;
    } else if (
      hasZero && nums[i] === 0
    ) {
      hasSecondZero = true;
      product = 0
      
      break;
    }
  }
  
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      hasZero && nums[i] !== 0
    ) {
      result.push(0);
    } else if (
      hasZero && nums[i] === 0
    ) {
      result.push(product)
    } else {
      result.push(product / nums[i]);
    }
  }

  return result;
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
console.log(productExceptSelf([1,2,3,4,5])) // [120,60,40,30,24]
console.log(productExceptSelf([1,2,3,4,5,6])) // [720,360,240,180,144,120]
console.log(productExceptSelf([1,2,3,4,5,6,7])) // [5040,2520,1680,1260,1008,840,720]
console.log(productExceptSelf([0,0])) // [0, 0]
console.log(productExceptSelf([0,4,0])) // [0, 0, 0]