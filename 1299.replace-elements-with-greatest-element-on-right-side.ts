function replaceElements(arr: number[]): number[] {
  const result = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let max = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    result[i] = max;
  }

  return result;
};

console.log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]
console.log(replaceElements([400])) // [-1]
console.log(replaceElements([400, 500])) // [500, -1]
console.log(replaceElements([400, 500, 300])) // [500, 300, -1]
console.log(replaceElements([400, 500, 300, 200])) // [500, 300, 200, -1]