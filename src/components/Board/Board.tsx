import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Square from "../Square";
import type { TicTacToe } from "../../store/tictactoeReducer";
import { st, classes } from "./Board.st.css";

export type BoardProps = {
  squares?: [];
  lengthTodoList?: number;

  value: string;
  lengthWinnerRow?: number;
  isPlayer: boolean;
  isStarted: number;
};

const Board = ({ value, lengthWinnerRow }: any) => {
  const disabled = lengthWinnerRow === 5 ? true : false;
  const presentState: TicTacToe["presentState"] = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe.presentState
  );

  return (
    <div className={st(classes.root, { value })} data-hook="board">
      {presentState &&
        _.map(
          presentState?.squares,
          (
            squareX: { x: number; y: number; value: string | null }[],
            index
          ) => (
            <div className={st(classes.squares)} key={index}>
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
