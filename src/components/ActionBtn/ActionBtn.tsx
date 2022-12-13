import { memo } from "react";
import _ from "lodash";
import { redo, reStart, undo, init } from "../../store/tictactoeReducer";
import { useDispatch, useSelector } from "react-redux";
import type { TicTacToe } from "../../store/tictactoeReducer";
import { st, classes } from "./ActionBtn.st.css";

const Action = () => {
  const dispatch = useDispatch();

  const presentState: TicTacToe["presentState"] = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe.presentState
  );

  const playerToWin = presentState?.playerToWin;

  const disabled = playerToWin && playerToWin ? false : true;

  const showBtn = (type: string) => {
    switch (type) {
      case "UNDO":
        disabled && dispatch(undo());
        break;
      case "REDO":
        disabled && dispatch(redo());
        break;
      default:
        dispatch(init());
        dispatch(init());
        dispatch(reStart());
        break;
    }
  };

  return (
    <div className={st(classes.root)} data-hook="action">
      <button
        className={st(classes.undo)}
        onClick={() => showBtn("UNDO")}
        data-hook="undo"
      >
        Undo
      </button>

      <button
        className={st(classes.redo)}
        onClick={() => showBtn("REDO")}
        data-hook="redo"
      >
        Redo
      </button>

      <button
        className={st(classes.restartBtn)}
        onClick={() => showBtn("RESTART")}
        data-hook="restart"
      >
        Play again
      </button>
    </div>
  );
};

export default memo(Action);
