class NumArray {
  private nums;
  constructor(nums: number[]) {
      this.nums = nums;
  }

  sumRange(left: number, right: number): number {
      return this.nums.slice(left, right + 1).reduce((s, arr) => s + arr, 0)
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/

console.log(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 2)) // 1
console.log(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(2, 5)) // -1
console.log(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 5)) // -3
console.log(new NumArray([-1]).sumRange(0, 0)) // -1
