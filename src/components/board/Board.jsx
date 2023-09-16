import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  return (
    <>
      <div className="board">
        {board.map((row, rIndex) => (
          <div className="row" key={rIndex}>
            {row.map((value, cIndex) => (
              <div className="col app-flex" key={cIndex}>
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
