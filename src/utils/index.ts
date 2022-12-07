import _ from "lodash";

export const isWin = (
  board: any,
  currentSquare?: { x: number; y: number; value: string | null }
) => {
  const arrRow = () => {
    let row: { x: number; y: number; value: string | null }[] = [];
    const x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      row = [currentSquare];
    }
    if (x && y) {
      for (let j = y + 1; j < board[x]?.length; j++) {
        const aa = board[x][j];

        if (aa?.value !== null && currentSquare?.value !== null) {
          row.push(aa);
        } else {
          break;
        }
      }
      for (let i = y - 1; i < board[x]?.length && i >= 0; i--) {
        const bb = board[x][i];

        if (bb?.value !== null && currentSquare?.value !== null) {
          row = [bb, ...row];
        } else {
          break;
        }
      }
    }

    return row;
  };

  const arrCol = () => {
    let col: { x: number; y: number; value: string | null }[] = [];
    let x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      col = [currentSquare];
    }
    if (x && y) {
      // for (let j = x + 1; j < board?.length; j++) {
      while (x >= 0 && x < board.length - 1) {
        const aa = board[x + 1][y];
        if (aa?.value !== null && currentSquare?.value !== null) {
          col.push(aa);

          x++;
        } else {
          break;
        }
      }
      while (x > 0 && x < board.length) {
        const bb = board[x - 1][y];
        if (bb?.value !== null && currentSquare?.value !== null) {
          col = [bb, ...col];
          x--;
        } else {
          break;
        }
      }

      //   for (let i = x - 1; i < board?.length && i >= 0; i--) {
      //     const bb = board[i][y];
      //     if (bb?.value !== null && currentSquare?.value !== null) {
      //       col = [bb, ...col];
      //     } else {
      //       break;
      //     }
      //   }
    }

    return col;
  };

  const arrDiagonRight = () => {
    let diagonR: { x: number; y: number; value: string | null }[] = [];
    let x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      diagonR = [currentSquare];
    }
    let abc = [];
    if (x && y) {
      // for (let i = x + 1; i < board?.length; i++) {
      //   for (let j = y + 1; j < board[i]?.length; j++) {

      while (
        x >= 0 &&
        y >= 0 &&
        x < board?.length - 1 &&
        y < board[x]?.length - 1
      ) {
        const aa = board[x + 1][y + 1];

        console.log(aa, currentSquare);
        if (aa?.value !== null && currentSquare?.value !== null) {
          diagonR = [...diagonR, aa];
          x++;
          y++;
        } else {
          break;
        }
      }

      //   }
      // }

      // for (let i = x - 1; i < board?.length && i >= 0; i--) {
      //   for (let j = y - 1; j < board[i]?.length && j > 0; j--) {

      while (
        x > 0 &&
        y > 0 &&
        x < board?.length - 1 &&
        y < board[x]?.length - 1
      ) {
        const bb = board[x - 1][y - 1];

        if (bb?.value !== null && currentSquare?.value !== null) {
          diagonR = [bb, ...diagonR];
          x--;
          y--;
        } else {
          break;
        }
      }
      //   if (bb?.value !== null && currentSquare?.value !== null) {
      //     diagonR = [bb, ...diagonR];
      //     x--;
      //     y--;
      //     //   }
      //     // }
      //   }
    }

    return diagonR;
  };

  const arrDiagonLeft = () => {
    let diagonL: { x: number; y: number; value: string | null }[] = [];
    let x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      diagonL = [currentSquare];
    }
    if (x && y) {
      for (let i = x - 1; i < board?.length && i >= 0; i--) {
        for (let j = y + 1; j < board[i]?.length; j++) {
          const aa = board[i][j];
          if (aa?.value !== null && currentSquare?.value !== null) {
            diagonL.push(aa);
          } else {
            break;
          }
        }
      }

      for (let i = x + 1; i < board?.length && i > 0; i++) {
        for (let j = y - 1; j < board[i]?.length && j > 0; j--) {
          const bb = board[i][j];
          if (bb?.value !== null && currentSquare?.value !== null) {
            diagonL = [bb, ...diagonL];
          } else {
            break;
          }
        }
      }
    }
    return diagonL;
  };

  const checkWin = () => {
    console.log(
      "1: ",
      arrRow(),
      "2: ",

      arrCol(),
      "3: ",

      arrDiagonRight(),
      "4: ",
      arrDiagonLeft()
    );
    if ("tru") {
      //
      return true;
    } else {
      //
    }
  };

  checkWin();
};
