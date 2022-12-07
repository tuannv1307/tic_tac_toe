import store from "../store/store";

import { TicTacToe } from "../store/tictactoeReducer";

export const isWin = (
  board: any,
  currentSquare?: { x: number; y: number; value: string | null }
) => {
  // const { tictactoe } = store.getState();
  // const x = tictactoe.presentState;
  // const currentTurn = x!.isPlayer;
  const arrRow = () => {
    let row = [];

    const x = currentSquare?.x;
    const y = currentSquare?.y;
    if (currentSquare?.value) {
      row = [currentSquare];
    }
    // while(y)
    // for (let i = 0; i < board.length; i++) {
    for (let j = y; j < board[x]?.length; j++) {
      //  for (let i = 0; board[x]?.length > i && i > 0; i++) {
      const a = board[x][j + 1];

      if (a?.value) {
        row.push(a);
      } else {
        break;
      }
      // }

      ///}
    }
    console.log("🚀 ~ file: index.ts:14 ~ arrRow ~ row", row);
    return row;
  };

  // console.log("ABC", arrRow());
  arrRow();
  const m = [
    {
      value: "X",
      x: 6,
      y: 3,
    },
    {
      value: "X",
      x: 6,
      y: 4,
    },
    {
      value: "X",
      x: 6,
      y: 5,
    },
    {
      value: "X",
      x: 6,
      y: 6,
    },
    // {
    //   value: "X",
    //   x: 6,
    //   y: 7,
    // },
    {
      value: "X",
      x: 6,
      y: 8,
    },
  ];

  const abc = (m) => {
    if ("tru") {
      //
      return true;
    } else {
      //
    }
  };

  // const checkWinRow = (
  //   y: number,
  //   x: number,
  //   cell: { x: number; y: number; value: string | null }
  // ) => {
  //   let count = 1;
  //   let arrWin = [cell];
  //   for (let j = x + 1; j < board[y]?.length; j++) {
  //     let p = board[y][j];
  //     if (
  //       p?.value === cell?.value &&
  //       p?.value !== null &&
  //       cell?.value !== null
  //     ) {
  //       count++;
  //       arrWin.push(p);
  //     } else {
  //       break;
  //     }
  //   }
  //   if (count >= 5) {
  //     return arrWin;
  //   }
  // };
  // const checkWinCol = (
  //   y: number,
  //   x: number,
  //   cell: { x: number; y: number; value: string | null }
  // ) => {
  //   let count = 1;
  //   let arrWin = [cell];
  //   for (let i = y + 1; i < board?.length; i++) {
  //     //for (let j = x; j < board[i].length; j++) {
  //     let p = board[i][x];

  //     if (
  //       p?.value === cell?.value &&
  //       p?.value !== null &&
  //       cell?.value !== null
  //     ) {
  //       arrWin.push(p);
  //       count++;
  //     } else {
  //       break;
  //     }
  //     // }
  //   }

  //   if (count >= 5) {
  //     return arrWin;
  //   }
  // };

  // const checkWinDiagRight = (
  //   y: number,
  //   x: number,
  //   cell: { x: number; y: number; value: string | null }
  // ) => {
  //   console.log("🚀 ~ file: index.ts:66 ~ isWin ~ x", x);
  //   console.log("🚀 ~ file: index.ts:66 ~ isWin ~ y", y);
  //   let count = 1;
  //   let arrWin = [cell];

  //   for (let i = y + 1; i < board?.length; i++) {
  //     for (let j = x + 1; j < board[i]?.length; j++) {
  //       let p = board[i][j];
  //       // console.log("🚀 ~ file: index.ts:76 ~ isWin ~ p", p);
  //       // const leftUp = board[x - 1][y - 1];
  //       // console.log("🚀 ~ file: index.ts:70 ~ isWin ~ leftUp", leftUp);
  //       if (
  //         p?.value === cell?.value &&
  //         p?.value !== null &&
  //         cell?.value !== null
  //       ) {
  //         arrWin.push(p);
  //         count++;
  //       } else break;
  //     }
  //   }

  //   if (count >= 5) {
  //     return arrWin;
  //   }
  // };

  // const checkWinDiagLeft = (
  //   y: number,
  //   x: number,
  //   cell: { x: number; y: number; value: string | null }
  // ) => {
  //   let count = 1;
  //   let arrWin = [cell];
  //   for (let i = y - 1; i < board?.length && i > -1; i--) {
  //     for (let j = x + 1; j < board[i]?.length; j++) {
  //       let p = board[i][j];
  //       if (
  //         p?.value === cell?.value &&
  //         p?.value !== null &&
  //         cell?.value !== null
  //       ) {
  //         count++;
  //         arrWin.push(p);
  //       } else {
  //       }
  //     }
  //   }

  //   if (count >= 5) {
  //     return arrWin;
  //   }
  // };

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board[i].length; j++) {
  //     const cell = board[i][j];

  //     if (cell.value !== null) {
  //       // console.log(cell);
  //       const winRow = checkWinRow(i, j, cell);
  //       if (winRow) {
  //         return winRow;
  //       }

  //       const winCol = checkWinCol(i, j, cell);
  //       if (winCol) {
  //         return winCol;
  //       }

  //       const winDiagRight = checkWinDiagRight(i, j, cell);
  //       if (winDiagRight) return winDiagRight;

  //       const winDiagLeft = checkWinDiagLeft(i, j, cell);
  //       if (winDiagLeft) return winDiagLeft;
  //     }
  //   }
  // }
  // if (board.length === 0) {
  //   return [];
  // }
};
