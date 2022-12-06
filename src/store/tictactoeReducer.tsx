import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TicTacToe = {
  prevState?: [];

  presentState?: {
    squares?: number[] | string[];
    isStarted?: boolean;
    isPlayer?: string;
    boardSize?: number;
    marksToWin?: number;
  };

  nextState?: [];
};

export type Actions = {
  addSquares: (
    state: any,
    action: PayloadAction<TicTacToeActionPayload>
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
    isPlayer: "O",
    boardSize: 10,
    marksToWin: 5,
  },

  nextState: [],
};

export type TicTacToeActionPayload = {
  i: number;
  name?: string;
  isStart: boolean;
};

const squareSlice = createSlice<TicTacToe, Actions>({
  name: "tictactoe",
  initialState: initialData as TicTacToe,
  reducers: {
    addSquares: (state, action) => {
      let { prevState, presentState, nextState } = state;
      let { i, name, isStart } = action.payload;
      const nextSquares = [...presentState.squares];
      nextSquares[i] = name;
      presentState.isStarted = isStart;
      presentState.isPlayer = isStart === false ? "O" : "X";
      presentState.squares = nextSquares;

      prevState.push(nextState.pop());
      nextState.length = 0;
      nextState.push(presentState);
    },

    redo: (state) => {
      if (state.nextState?.length >= 1) {
        let redoStack = state.nextState.pop();
        state.presentState = redoStack;
        state.prevState.push(redoStack);
      }
    },

    undo: (state) => {
      if (state.prevState?.length >= 2) {
        let undoStack = state.prevState.pop();
        state.nextState.push(undoStack);
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

export const { addSquares, redo, undo, reStart } = squareSlice.actions;

export default squareSlice.reducer;
