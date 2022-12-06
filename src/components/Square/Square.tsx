import { memo } from "react";

import { st, classes } from "./Square.st.css";

export type SquareProps = {
  value?: number;
  handleOnClick?: (() => any) | undefined;
  disabled?: boolean;
};

const Square = ({ value, handleOnClick, disabled }: SquareProps) => {
  return (
    <button
      className={st(classes.root)}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default memo(Square);
