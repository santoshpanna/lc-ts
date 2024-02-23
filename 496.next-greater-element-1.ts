function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    let secondIndex = -1;
    let secondCounter = 0;
    let checkForGreaterInteger = false;

    while (secondCounter < nums2.length) {
      if (nums2[secondCounter] === nums1[i]) {
        secondIndex = secondCounter;
      }

      if (
        secondIndex !== -1
        && checkForGreaterInteger === false
        && nums2[secondCounter] > nums1[i]
      ) {
        checkForGreaterInteger = true;
        result.push(nums2[secondCounter]);
      }
      secondCounter++;
    }

    if (checkForGreaterInteger === false) {
      result.push(-1);
    }
  }

  return result;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2])) // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])) // [3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4,5])) // [3,5]
console.log(nextGreaterElement([4,1,2], [1,2,3,4])) // [-1,2,3]