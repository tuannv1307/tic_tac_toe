import { memo, useState } from "react";
import _ from "lodash";
import { st, classes } from "./ActionBtn.st.css";

export type ActionProps = {
  todos?: { id: string; name: string; completed: boolean }[];
  lengthTodoList?: number;
};

const Action = ({ showBtn }: any) => {
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
