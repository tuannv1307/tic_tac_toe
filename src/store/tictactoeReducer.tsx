import { createSlice, type PayloadAction, current } from "@reduxjs/toolkit";
import _ from "lodash";

export type TicTacToe = {
  prevState?: [];
  presentState?: {
    squares?: { x: number; y: number; value: string | null }[];
    isStarted?: boolean;
    isPlayer?: string;
    boardSize?: { x?: number; y?: number };
    marksToWin?: number;
  };

  nextState?: [];
};

export type Actions = {
  init: (state: TicTacToe) => void;
  changeBoard: (
    state: TicTacToe,
    action: PayloadAction<{ boardSize?: { x?: number; y?: number } }>
  ) => void;
  addSquares: (
    state: any,
    action: PayloadAction<{ x: number; y: number; value: string | null }>
  ) => void;
  redo: (state: any) => void;
  undo: (state: any) => void;

  reStart: (state: any) => void;
};

const initialData: TicTacToe = {
  prevState: [],

  presentState: {
    squares: [],
    isStarted: false,
    isPlayer: "X",
    boardSize: {
      x: 15,
      y: 15,
    },
    marksToWin: 5,
  },

  nextState: [],
};

export type TicTacToeActionPayload = {
  // i: number;
  // name?: string;
  // isStart: boolean;

  x: number;
  y: number;
  value: "X" | "O";
};

const squareSlice = createSlice<TicTacToe, Actions>({
  name: "tictactoe",
  initialState: initialData as TicTacToe,
  reducers: {
    init: (state) => {
      const initBoard = [];

      if (
        state.presentState &&
        state.presentState.boardSize?.x &&
        state.presentState.boardSize?.y
      ) {
        for (let i = 0; i < state.presentState?.boardSize?.y; i++) {
          const temp = [];
          for (let j = 0; j < state.presentState?.boardSize?.x; j++) {
            temp.push({ x: i, y: j, value: null });
          }
          initBoard.push(temp);
        }
      }

      const tempSquare: {
        isStarted?: boolean;
        isPlayer?: "O" | "X";
        squares?: any;
        boardSize?: {
          x?: number;
          y?: number;
        };
      } = {
        isStarted: false,
        isPlayer: "X",
        squares: initBoard,
        boardSize: {
          x: 15,
          y: 15,
        },
      };

      state.presentState = tempSquare;
    },

    changeBoard: (state, action) => {
      const initBoard = [];
      const { x, y } = action.payload.boardSize || { x: 15, y: 15 };

      if (x && y) {
        for (let i = 0; i < y; i++) {
          const temp = [];
          for (let j = 0; j < x; j++) {
            temp.push({ x: i, y: j, value: null });
          }
          initBoard.push(temp);
        }
      }

      if (state.presentState?.boardSize && state.presentState.squares) {
        console.log("a", action.payload.boardSize, initBoard);

        state.presentState.boardSize = action.payload.boardSize;
        state.presentState.squares = initBoard;
      }
    },

    addSquares: (state, action) => {
      const nextSquares = _.cloneDeep(state.presentState.squares);
      nextSquares[action.payload.x][action.payload.y].value =
        state.presentState.isStarted === true ? "O" : "X";

      const tempSquare: {
        isStarted?: boolean;
        isPlayer?: "X" | "O";
        squares?: string[];
        boardSize?: {
          x?: number;
          y?: number;
        };
      } = {
        isStarted: !state.presentState.isStarted,
        isPlayer: !state.presentState.isStarted === true ? "O" : "X",
        squares: nextSquares,
        boardSize: {
          x: 15,
          y: 15,
        },
      };

      state.prevState.push(_.cloneDeep(state.presentState));
      state.presentState = _.cloneDeep(tempSquare);
    },

    redo: (state) => {
      console.log("State", current(state));

      if (state.nextState?.length > 0) {
        let redoStack = state.nextState.pop();
        state.prevState.push(_.cloneDeep(state.presentState));
        state.presentState = redoStack;
      }
    },

    undo: (state) => {
      if (state.prevState?.length > 0) {
        let undoStack = state.prevState.pop();
        state.nextState.push(_.cloneDeep(state.presentState));
        state.presentState = undoStack;
      }
    },

    reStart: (state) => {
      let { presentState } = state;
      presentState.squares = [];
      state.prevState = [];
      state.nextState = [];
    },
  },
  extraReducers: {},
});

export const { init, changeBoard, addSquares, redo, undo, reStart } =
  squareSlice.actions;

export default squareSlice.reducer;
