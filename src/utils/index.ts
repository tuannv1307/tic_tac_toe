export const isWin = (
  board: any,
  currentSquare?: { x: number; y: number; value: string | null }
) => {
  const arrRow = () => {
    let row = [];
    const x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      row = [currentSquare];
    }
    if (x && y) {
      for (let j = y; j < board[x]?.length; j++) {
        const aa = board[x][j + 1];

        if (aa?.value !== null && currentSquare?.value !== null) {
          row.push(aa);
        } else {
          break;
        }
      }
      for (let i = y; i < board[x]?.length && i >= 0; i--) {
        //  for (let i = 0; board[x]?.length > i && i > 0; i++) {
        const bb = board[x][i - 1];

        if (
          // bb?.value === currentSquare?.value &&
          bb?.value !== null &&
          currentSquare?.value !== null
        ) {
          row = [bb, ...row];
        } else {
          break;
        }
      }
    }

    return row;
  };

  const arrCol = () => {
    let col = [];
    const x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      col = [currentSquare];
    }
    if (x && y) {
      for (let j = x; j < board?.length; j++) {
        const aa = board[j + 1][y];

        if (aa?.value !== null && currentSquare?.value !== null) {
          col.push(aa);
        } else {
          break;
        }
      }
      for (let i = x; i < board?.length && i >= 0; i--) {
        //  for (let j = y; board[i]?.length > j && j > 0; j++) {
        const bb = board[i - 1][y];

        if (
          // bb?.value === currentSquare?.value &&
          bb?.value !== null &&
          currentSquare?.value !== null
        ) {
          col = [bb, ...col];
        } else {
          break;
        }
        // }
      }
    }

    return col;
  };

  const arrDiagonRight = () => {
    let diagonR = [];
    let x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      diagonR = [currentSquare];
    }
    if (x && y) {
      for (let i = x + 1; i < board?.length; i++) {
        for (let j = y + 1; j < board[i]?.length; j++) {
          const aa = board[i][j];
          if (aa?.value !== null && currentSquare?.value !== null) {
            diagonR.push(aa);
          }
        }
      }

      for (let i = x - 1; i < board?.length && i > 0; i--) {
        for (let j = y - 1; j < board[i]?.length && j > 0; j--) {
          const bb = board[i][j];
          if (bb?.value !== null && currentSquare?.value !== null) {
            diagonR = [bb, ...diagonR];
          }
        }
      }
    }
    return diagonR;
  };

  const arrDiagonLeft = () => {
    let diagonL = [];
    let x = currentSquare?.x;
    let y = currentSquare?.y;
    if (currentSquare?.value) {
      diagonL = [currentSquare];
    }
    if (x && y) {
      for (let i = x - 1; i < board?.length && i > 0; i--) {
        for (let j = y + 1; j < board[i]?.length; j++) {
          const aa = board[i][j];
          if (aa?.value !== null && currentSquare?.value !== null) {
            diagonL.push(aa);
          }
          // else {
          //   break;
          // }
        }
      }

      for (let i = x + 1; i < board?.length && i > 0; i++) {
        for (let j = y - 1; j < board[i]?.length && j > 0; j--) {
          const bb = board[i][j];
          if (bb?.value !== null && currentSquare?.value !== null) {
            diagonL = [bb, ...diagonL];
          }
          // else {
          //   break;
          // }
        }
      }
    }
    return diagonL;
  };

  const checkWin = (m) => {
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
