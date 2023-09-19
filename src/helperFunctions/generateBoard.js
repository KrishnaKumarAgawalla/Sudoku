import { generateEmptyBoard, solveBoard } from "./index";

const generateBoard = () => {
  let board = generateEmptyBoard();
  solveBoard(board, 0, 0);

  console.table(board);

  return board;
};

export default generateBoard;
