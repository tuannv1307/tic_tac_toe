import _ from "lodash";
import { memo, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSquares } from "../../store/tictactoeReducer";
import { st, classes } from "./Square.st.css";
import type { TicTacToe } from "../../store/tictactoeReducer";

export type SquareProps = {
  square?: {
    x: number;
    y: number;
    value: string | null;
  };
  disabled?: boolean;
};

const Square = ({ square }: SquareProps) => {
  const dispatch = useDispatch();

  const presentState: TicTacToe["presentState"] = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe.presentState
  );

  const playerToWin = presentState?.playerToWin;

  const disabled = playerToWin && playerToWin ? false : true;

  const winner = presentState?.arrayWin;

  const typeWin = presentState?.typeWin;

  const filterArr = winner?.filter((i) => i === square);

  const handleOnClick = () => {
    if (square && _.isNull(square?.value) && disabled) {
      dispatch(addSquares(square));
    }
  };

  return (
    <div
      className={st(classes.root, { playerToWin })}
      style={{}}
      onClick={handleOnClick}
      data-hook="square"
    >
      {square?.value}
      <span
        className={st(`${!_.isEmpty(filterArr) ? classes.drawLine : ""}`, {
          typeWin,
        })}
      ></span>
    </div>
  );
};

export default memo(Square);
