function isValidQuadrant(board: string[][], quadrant: number) {
  const hasSeenSet = new Set<string>();
  let rowLow = quadrant - 3 < 0 ? 0 : Math.floor(quadrant / 3);
  rowLow = rowLow !== 0 ? (rowLow % 3) * 3 : rowLow;
  const rowHigh = rowLow + 3;
  const colLow = Math.floor(quadrant % 3) * 3;
  const colHigh = colLow + 3;

  // console.log('🚀 ~ isValidQuadrant ~ rowLow:', rowLow);
  // console.log('🚀 ~ isValidQuadrant ~ rowHigh:', rowHigh);
  // console.log('🚀 ~ isValidQuadrant ~ colLow:', colLow);
  // console.log('🚀 ~ isValidQuadrant ~ colHigh:', colHigh);
  for (let i = rowLow; i < rowHigh; i++) {
    for (let j = colLow; j < colHigh; j++) {
      if (board[i][j] === '.') {
        continue;
      }

      if (!hasSeenSet.has(board[i][j])) {
        hasSeenSet.add(board[i][j]);
      } else {
        return false;
      }
    }
  }

  return true;
}

function isValidRowAndCol(board: string[][], quadrant: number) {
  const hasSeenRowSet = new Set<string>();
  const hasSeenColSet = new Set<string>();

  for (let i = 0; i < 9; i++) {
    if (
      !hasSeenRowSet.has(board[quadrant][i])
      && board[quadrant][i] !== '.'
    ) {
      hasSeenRowSet.add(board[quadrant][i]);
    } else if (
      hasSeenRowSet.has(board[quadrant][i])
      && board[quadrant][i] !== '.'
    ) {
      return false;
    }

    if (
      !hasSeenColSet.has(board[i][quadrant])
      && board[i][quadrant] !== '.'
    ) {
      hasSeenColSet.add(board[i][quadrant]);
    } else if (
      hasSeenColSet.has(board[i][quadrant])
      && board[i][quadrant] !== '.'
    ) {
      return false;
    }
  }

  return true;
}

function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    if (
      !isValidQuadrant(board, i)
      || !isValidRowAndCol(board, i)
    ) {
      return false;
    }
  }
  
  return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
console.log(isValidSudoku([[".",".",".",".","8",".",".",".","."],[".",".",".",".",".",".","5",".","."],[".",".",".",".","4",".",".","2","."],[".",".",".","3",".","9",".",".","."],[".",".","1","8",".",".","9",".","."],[".",".",".",".",".","5","1",".","."],[".",".","3",".",".","8",".",".","."],[".","1","2",".","3",".",".",".","."],[".",".",".",".",".","7",".",".","1"]]));