import { memo } from "react";
import _ from "lodash";
import { redo, reStart, undo, init } from "../../store/tictactoeReducer";
import { useDispatch } from "react-redux";
import { st, classes } from "./ActionBtn.st.css";

const Action = () => {
  const dispatch = useDispatch();
  const showBtn = (type: string) => {
    try {
      switch (type) {
        case "UNDO":
          dispatch(undo());
          break;
        case "REDO":
          dispatch(redo());
          break;
        default:
          dispatch(init());
          dispatch(reStart());
          break;
      }
    } catch (error) {
      console.log(error);
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
