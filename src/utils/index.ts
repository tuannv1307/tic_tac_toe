// export const getSplitArr = (arr, gridCount = 10) => {
//   return new Array(Math.ceil(arr.length / gridCount))
//     .fill(null)
//     .map((item, i) => arr.slice(gridCount * i, gridCount * i + gridCount));
// };

export const getWinnerRow = (
  board = [],
  boardSize: number,
  marksToWin: number
) => {
  const fitsVertically = (i: number) =>
    i + boardSize * (marksToWin - 1) < boardSize * boardSize;

  const fitsHorizontally = (i: number) =>
    (i % boardSize) + marksToWin <= boardSize;

  const fitsBackHorizontally = (i: number) =>
    (i % boardSize) - (marksToWin - 1) >= 0;

  const getHorizontalRow = (i: any, cell: any, board = []) => {
    if (!fitsHorizontally(i)) return null;

    let currWinnerRow = [i];
    let currRowCount = 1;

    for (let j = i + 1; currRowCount < marksToWin; j++) {
      if (board[j] === cell) {
        currWinnerRow.push(j);
        currRowCount++;
      } else {
        break;
      }
    }

    return currWinnerRow.length >= marksToWin - 1 ? currWinnerRow : null;
  };

  const getVerticalRow = (i: number, cell: string, board = []) => {
    if (!fitsVertically(i)) return null;

    let currWinnerRow = [i];
    let currRowCount = 1;

    for (let j = i + boardSize; currRowCount < marksToWin; j += boardSize) {
      if (board[j] === cell) {
        currWinnerRow.push(j);
        currRowCount++;
      } else {
        break;
      }
    }

    return currWinnerRow.length >= marksToWin - 1 ? currWinnerRow : null;
  };

  const getDiagonalLTRRow = (i: number, cell: string, board = []) => {
    if (!fitsHorizontally(i) || !fitsVertically(i)) return null;

    let currWinnerRow = [i];
    let currRowCount = 1;

    for (
      let j = i + boardSize + 1;
      currRowCount < marksToWin;
      j += boardSize + 1
    ) {
      if (board[j] === cell) {
        currWinnerRow.push(j);
        currRowCount++;
      } else {
        break;
      }
    }

    return currWinnerRow.length >= marksToWin - 1 ? currWinnerRow : null;
  };

  const getDiagonalRTLRow = (i: number, cell: string, board = []) => {
    if (!fitsVertically(i) || !fitsBackHorizontally(i)) return null;

    let currWinnerRowWith5 = [i];
    let currRowCount = 1;

    for (
      let j = i + boardSize - 1;
      currRowCount < marksToWin;
      j += boardSize - 1
    ) {
      if (board[j] === cell) {
        currWinnerRowWith5.push(j);
        currRowCount++;
      } else {
        break;
      }
    }

    return currWinnerRowWith5.length >= marksToWin - 1
      ? currWinnerRowWith5
      : null;
  };

  let emptyCellCount = board.length;

  for (let i = 0; i < board.length; i++) {
    const cell = board[i];

    if (cell) {
      emptyCellCount--;

      const horizontalRow = getHorizontalRow(i, cell, board);
      if (horizontalRow) return horizontalRow;

      const verticalRow = getVerticalRow(i, cell, board);
      if (verticalRow) return verticalRow;

      const diagonalLTRRow = getDiagonalLTRRow(i, cell, board);
      if (diagonalLTRRow) return diagonalLTRRow;

      const diagonalRTLRow = getDiagonalRTLRow(i, cell, board);
      if (diagonalRTLRow) return diagonalRTLRow;
    }
  }

  if (board.length && emptyCellCount <= 0) return [];
};
