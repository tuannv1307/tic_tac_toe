import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import Square from "../Square";
import { st, classes } from "./Board.st.css";
import { addSquares } from "../../store/tictactoeReducer";

export type BoardProps = {
  squares?: [];
  lengthTodoList?: number;

  value: string;
  lengthWinnerRow?: number;
  isPlayer: boolean;
  isStarted: number;
};

const Board = ({
  squares,
  isPlayer,
  isStarted,

  value,
  lengthWinnerRow,
}: any) => {
  const disabled = lengthWinnerRow === 5 ? true : false;

  const renderSquare = (i: number) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
      if (squares[i] != null) {
        return;
      }
      const name = isPlayer;
      const isStart = !isStarted;
      dispatch(addSquares({ i, name, isStart }));
    };

    return (
      <Square
        value={!_.isUndefined(squares[i]) ? squares[i] : null}
        handleOnClick={handleOnClick}
        key={i}
        disabled={disabled}
      />
    );
  };

  const renderBoardDivs = () => {
    let arrBoard = [];
    let count = 0;
    for (let row = 0; row < +value; row++) {
      for (let col = 0; col < +value; col++) {
        arrBoard.push(renderSquare(count));
        count++;
      }
    }
    return arrBoard;
  };

  return (
    <div className={st(classes.root, { value })} data-hook="board">
      {renderBoardDivs()}
    </div>
  );
};

export default memo(Board);
