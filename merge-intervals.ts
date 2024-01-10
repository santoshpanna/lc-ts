/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let rightIndex = 1;

  if (intervals.length === 1) {
    return intervals;
  }

  let tempInterval = sortedIntervals[0];

  while(rightIndex < sortedIntervals.length) {
    let leftMin = tempInterval[0] < sortedIntervals[rightIndex][0] ? tempInterval[0] : sortedIntervals[rightIndex][0];
    let rightMax = tempInterval[1] < sortedIntervals[rightIndex][1] ? sortedIntervals[rightIndex][1] : tempInterval[1];

    if (tempInterval[1] >= sortedIntervals[rightIndex][0]) {
      tempInterval = [leftMin, rightMax]
    } else {
      result.push(tempInterval);
      tempInterval = sortedIntervals[rightIndex];
    }
    rightIndex++;
  }

  result.push(tempInterval);

  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[2,5]])); // [[1,5]]
console.log(merge([[1,4],[0,0]])); // [[0,0], [1,4]]
console.log(merge([[1,4],[5,5]])); // [[1,5], [5,5]]
console.log(merge([[1,4],[0,4]])); // [[0,4]]
console.log(merge([[1,4],[0,1]])); // [[0,4]]
console.log(merge([[0,2],[1,4],[3,5]])); // [[0,5]]