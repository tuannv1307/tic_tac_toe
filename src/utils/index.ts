// export const getSplitArr = (arr, gridCount = 10) => {
//   return new Array(Math.ceil(arr.length / gridCount))
//     .fill(null)
//     .map((item, i) => arr.slice(gridCount * i, gridCount * i + gridCount));
// };

// export const getWinnerRow = (board, boardSize, marksToWin) => {
//   const fitsVertically = i => i + boardSize * (marksToWin - 1) < boardSize * boardSize;
//   const fitsHorizontally = i => i % boardSize + marksToWin <= boardSize;
//   const fitsBackHorizontally = i => i % boardSize - (marksToWin - 1) >= 0;

//   const getHorizontalRow = (i, cell, board = []) => {
//       if (!fitsHorizontally(i)) return null;

//       let currWinnerRow = [i];
//       let currRowCount = 1;

//       for (let j = i + 1; currRowCount < marksToWin; j++) {
//           if (board[j] === cell) {
//               currWinnerRow.push(j);
//               currRowCount++;
//           } else {
//               break;
//           }
//       }

//       return currWinnerRow.length >= marksToWin ? currWinnerRow : null;
//   };

//   const getVerticalRow = (i, cell, board = []) => {
//       if (!fitsVertically(i)) return null;

//       let currWinnerRow = [i];
//       let currRowCount = 1;

//       for (let j = i + boardSize; currRowCount < marksToWin; j += boardSize) {
//           if (board[j] === cell) {
//               currWinnerRow.push(j);
//               currRowCount++;
//           } else {
//               break;
//           }
//       }

//       return currWinnerRow.length >= marksToWin ? currWinnerRow : null;
//   };

//   const getDiagonalLTRRow = (i, cell, board = []) => {
//       if (!fitsHorizontally(i) || !fitsVertically(i)) return null;

//       let currWinnerRow = [i];
//       let currRowCount = 1;

//       for (let j = i + boardSize + 1; currRowCount < marksToWin; j += boardSize + 1) {
//           if (board[j] === cell) {
//               currWinnerRow.push(j);
//               currRowCount++;
//           } else {
//               break;
//           }
//       }

//       return currWinnerRow.length >= marksToWin ? currWinnerRow : null;
//   };

//   const getDiagonalRTLRow = (i, cell, board = []) => {
//       if (!fitsVertically(i) || !fitsBackHorizontally(i)) return null;

//       let currWinnerRow = [i];
//       let currRowCount = 1;

//       for (let j = i + boardSize - 1; currRowCount < marksToWin; j += boardSize - 1) {
//           if (board[j] === cell) {
//               currWinnerRow.push(j);
//               currRowCount++;
//           } else {
//               break;
//           }
//       }

//       return currWinnerRow.length >= marksToWin ? currWinnerRow : null;
//   };

//   let emptyCellCount = board.length;

//   for (let i = 0; i < board.length; i++) {
//       const cell = board[i];

//       if (cell) {
//           emptyCellCount--;

//           const horizontalRow = getHorizontalRow(i, cell, board);
//           if (horizontalRow) return horizontalRow;

//           const verticalRow = getVerticalRow(i, cell, board);
//           if (verticalRow) return verticalRow;

//           const diagonalLTRRow = getDiagonalLTRRow(i, cell, board);
//           if (diagonalLTRRow) return diagonalLTRRow;

//           const diagonalRTLRow = getDiagonalRTLRow(i, cell, board);
//           if (diagonalRTLRow) return diagonalRTLRow;
//       }
//   }

//   if (board.length && emptyCellCount <= 0) return [];
// };

export const isWin = (board, col, row, turn) => {
  const checkWinRow = (y, x, cell, arr = []) => {
    let IS = false;

    let count = 1;
    let arrWin = [cell];
    for (let i = y; i < arr?.length; i++) {
      for (let j = x; j < arr[i]?.length; j++) {
        let p = board[i][j + 1];

        if (
          p?.value === cell?.value &&
          // cell?.value === turn &&
          p?.value !== null &&
          cell?.value !== null
        ) {
          count++;
          arrWin.push(p);
        } else {
          break;
        }
      }
    }
    if (count >= 5) {
      console.log("aBC", arrWin);
      return (IS = true);
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell) {
        const horizontalRow = checkWinRow(i, j, cell, board);
        if (horizontalRow) return horizontalRow;
      }
    }
  }
};
