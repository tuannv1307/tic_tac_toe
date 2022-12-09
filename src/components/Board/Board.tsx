import { memo } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import Square from "../Square";
import type { TicTacToe } from "../../store/tictactoeReducer";
import { st, classes } from "./Board.st.css";

const Board = () => {
  const presentState: TicTacToe["presentState"] = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe.presentState
  );

  return (
    <div className={st(classes.root)} data-hook="board">
      {presentState &&
        _.map(
          presentState?.squares,
          (
            squareX: {
              x: number;
              y: number;
              value: string | null;
              color: { backgroundWin: string };
            }[],
            index
          ) => (
            <div
              className={st(classes.squares)}
              key={index}
              data-hook="item-board"
            >
              {_.map(squareX, (square, index) => (
                <Square square={square} key={index} />
              ))}
            </div>
          )
        )}
    </div>
  );
};

export default memo(Board);
