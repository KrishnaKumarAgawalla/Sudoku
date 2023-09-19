import React from "react";

const generateEmptyBoard = () => {
  //   let board = Array.from({ length: 9 }, (_,rowIndex) =>
  //     Array.from({ length: 9 }).fill().map((_,colIndex) => rowIndex*9+ colIndex+1)
  //   );

  let board = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }).fill(null)
  );

  return board;
};

export default generateEmptyBoard;
