import _ from "lodash";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSquares } from "../../store/tictactoeReducer";
import { st, classes } from "./Square.st.css";
import type { TicTacToe } from "../../store/tictactoeReducer";

export type SquareProps = {
  square?: { x: number; y: number; value: string | null };
  disabled?: boolean;
};

const Square = ({ square }: SquareProps) => {
  const dispatch = useDispatch();
  const presentState: TicTacToe["presentState"] = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe.presentState
  );
  const disabled =
    presentState?.playerToWin && presentState.playerToWin ? false : true;

  const handleOnClick = () => {
    if (square && _.isNull(square?.value) && disabled) {
      // isWin(squares);
      dispatch(addSquares(square));
    }
  };

  return (
    <div className={st(classes.root)} onClick={handleOnClick}>
      {square?.value}
    </div>
  );
};

export default memo(Square);
