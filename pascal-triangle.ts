/**
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
*/

function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const tempRow: number[] = [];
    tempRow.fill(0, 0, i);
    tempRow[0] = 1;
    tempRow[i] = 1;

    for (let j = 1; j < i; j++) {
      tempRow[j] = result[i-1][j-1] + result[i-1][j];
    }

    result.push(tempRow);
  }
  
  return result;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));