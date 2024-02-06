/*
You are playing a Flip Game with your friend.

You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].
*/

function generatePossibleNextMoves(currentState: string): string[] {
  let length = currentState.length;

  if (length <= 1) {
    return []
  }

  let count = 0;

  const resultArray: string[] = [];

  while (count < length) {
    if (currentState[count] === currentState[count+1]) {
      let tempStr: string[] = currentState.split('');
      if (currentState[count] === '+') {
        tempStr[count] = '-';
        tempStr[count+1] = '-';
      } else {
        tempStr[count] = '+';
        tempStr[count+1] = '+';
      }
      resultArray.push(tempStr.join(''))
    }
    count++;
  }

  return resultArray;
};

console.log(generatePossibleNextMoves('++++')) // ["--++","+--+","++--"]
console.log(generatePossibleNextMoves('++')) // ['--']
console.log(generatePossibleNextMoves('+')) // ['--']
console.log(generatePossibleNextMoves('+++++')) // ['--']