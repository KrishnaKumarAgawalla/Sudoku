import { checkValid, shuffle } from "./index";

const solveBoard = (board, row = 0, col = 0) => {
  //Array of nums
  const nums = Array.from({ length: 9 })
    .fill()
    .map((_, index) => index + 1);

  //check if we reached the last col
  if (col === 9) {
    row += 1;
    col = 0;
  }

  //check if we reached the last row
  if (row === 9) {
    return true; //board is solved
  }

  //check if it already has a num
  if (board[row][col] !== null) {
    solveBoard(board, row, col + 1);
  }

  shuffle(nums);

  for (const num of nums) {
    if (checkValid(board, num, row, col)) {
      //fill the cell with valid value
      board[row][col] = num;

      if (solveBoard(board, row, col + 1)) {
        //board solved
        return true;
      }
    }
  }

  //bactrack
  board[row][col] = null;
  return false;
};

export default solveBoard;
