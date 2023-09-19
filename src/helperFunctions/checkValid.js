const checkValid = (board, num, row, col) => {
  let isInRow = board[row].includes(num);
  
  let isInCol = board.some((r) => r[col] === num);

  let isInBox = board
    .slice(Math.floor(row / 3) * 3, Math.floor(row / 3) * 3 + 3)
    .some((r) =>
      r
        .slice(Math.floor(col / 3) * 3, Math.floor(col / 3) * 3 + 3)
        .includes(num)
    );

  return !isInBox && !isInCol && !isInRow;
};

export default checkValid;
