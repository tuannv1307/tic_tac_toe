import _ from "lodash";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { addSquares } from "../../store/tictactoeReducer";
import { st, classes } from "./Square.st.css";

export type SquareProps = {
  square?: { x: number; y: number; value: string | null };
  disabled?: boolean;
};

const Square = ({ square, disabled }: SquareProps) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (square && _.isNull(square?.value)) dispatch(addSquares(square));
  };

  return (
    <div
      className={st(classes.root)}
      onClick={handleOnClick}
      // disabled={disabled}
    >
      {square?.value}
    </div>
  );
};

export default memo(Square);
