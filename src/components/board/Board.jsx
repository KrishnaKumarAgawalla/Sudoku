import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [board, setBoard] = useState(Array.from({length: 9}, () => Array.from({length: 9}).fill(0)));

  const selectionNum = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <>
      <div className="board">
        {board.map((row, rIndex) => (
          <div
            className="row"
            key={rIndex}
            style={
              rIndex < row.length - 1 && (rIndex + 1) % 3 === 0
                ? { borderBottom: "5px solid black" }
                : {}
            }
          >
            {row.map((value, cIndex) => (
              <div
                className="col app-flex"
                key={cIndex}
                style={
                  cIndex < row.length - 1 && (cIndex + 1) % 3 === 0
                    ? { borderRight: "5px solid black" }
                    : {}
                }
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="board-num ">
        {selectionNum.map((num, index) => (
          <div className="board-num-selection app-flex" key={index + 1}>{num}</div>
        ))}
      </div>
    </>
  );
};

export default Board;
