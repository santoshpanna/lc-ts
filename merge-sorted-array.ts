/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 Do not return anything, modify nums1 in-place instead.
*/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let mIndex = m-1;
  let nIndex = n-1;
  let kIndex = m+n-1;

  while(kIndex >= 0 && nIndex >= 0) {
    if (nums1[mIndex] >= nums2[nIndex]) {
      nums1[kIndex--] = nums1[mIndex--];
    } else {
      nums1[kIndex--] = nums2[nIndex--];
    }
  }
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([4,5,6,0,0,0], 3, [1,2,3], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);