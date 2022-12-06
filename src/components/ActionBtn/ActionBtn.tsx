import { memo } from "react";
import _ from "lodash";
import { redo, reStart, undo, init } from "../../store/tictactoeReducer";
import { useDispatch } from "react-redux";
import { st, classes } from "./ActionBtn.st.css";

export type ActionProps = {
  todos?: { id: string; name: string; completed: boolean }[];
  lengthTodoList?: number;
};

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

          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={st(classes.root)} data-hook="board">
      <button className={st(classes.redo)} onClick={() => showBtn("REDO")}>
        Redo
      </button>

      <button className={st(classes.undo)} onClick={() => showBtn("UNDO")}>
        Undo
      </button>

      <button
        className={st(classes.restartBtn)}
        onClick={() => showBtn("RESTART")}
      >
        Play again
      </button>
    </div>
  );
};

export default memo(Action);
