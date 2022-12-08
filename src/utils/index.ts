import _ from "lodash";

const checkBlock = (
  board: any,
  arrWin: any,
  currentSquare: any,
  type?: "row" | "col" | "diagonRight" | "diagonLeft"
) => {
  if (type === "row") {
    if (_.size(arrWin) === 4) {
      if (
        !_.isUndefined(board[arrWin[0].x][arrWin[0].y - 1]) &&
        !_.isUndefined(board[arrWin[0].x][arrWin[0].y + 1]) &&
        (board[arrWin[0].x][arrWin[0].y - 1].value === null ||
          board[arrWin[0].x][arrWin[0].y - 1].value === currentSquare?.value) &&
        (board[arrWin[0].x][arrWin[0].y + 1].value === null ||
          board[arrWin[0].x][arrWin[0].y + 1].value === currentSquare?.value)
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;
      return false;
    } else if (_.size(arrWin) === 5) {
      if (
        (!_.isUndefined(board[arrWin[0].x][arrWin[0].y - 1]) &&
          (board[arrWin[0].x][arrWin[0].y - 1].value === null ||
            board[arrWin[0].x][arrWin[0].y - 1].value ===
              currentSquare?.value)) ||
        (!_.isUndefined(board[arrWin[0].x][arrWin[0].y + 1]) &&
          (board[arrWin[0].x][arrWin[0].y + 1].value === null ||
            board[arrWin[0].x][arrWin[0].y + 1].value === currentSquare?.value))
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;
      return false;
    }
  } else if (type === "col") {
    if (_.size(arrWin) === 4) {
      if (
        !_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y]) &&
        !_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y]) &&
        (board[arrWin[0].x - 1][arrWin[0].y].value === null ||
          board[arrWin[0].x - 1][arrWin[0].y].value === currentSquare?.value) &&
        (board[arrWin[0].x + 1][arrWin[0].y].value === null ||
          board[arrWin[0].x + 1][arrWin[0].y].value === currentSquare?.value)
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;

      return false;
    } else if (_.size(arrWin) === 5) {
      if (
        (!_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y]) &&
          (board[arrWin[0].x - 1][arrWin[0].y].value === null ||
            board[arrWin[0].x - 1][arrWin[0].y].value ===
              currentSquare?.value)) ||
        (!_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y]) &&
          (board[arrWin[0].x + 1][arrWin[0].y].value === null ||
            board[arrWin[0].x + 1][arrWin[0].y].value === currentSquare?.value))
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;

      return false;
    }
  } else if (type === "diagonRight") {
    if (_.size(arrWin) === 4) {
      if (
        !_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y - 1]) &&
        !_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y + 1]) &&
        (board[arrWin[0].x - 1][arrWin[0].y - 1].value === null ||
          board[arrWin[0].x - 1][arrWin[0].y - 1].value ===
            currentSquare?.value) &&
        (board[arrWin[0].x + 1][arrWin[0].y + 1].value === null ||
          board[arrWin[0].x + 1][arrWin[0].y + 1].value ===
            currentSquare?.value)
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;

      return false;
    } else if (_.size(arrWin) === 5) {
      if (
        (!_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y - 1]) &&
          (board[arrWin[0].x - 1][arrWin[0].y - 1].value === null ||
            board[arrWin[0].x - 1][arrWin[0].y - 1].value ===
              currentSquare?.value)) ||
        (!_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y + 1]) &&
          (board[arrWin[0].x + 1][arrWin[0].y + 1].value === null ||
            board[arrWin[0].x + 1][arrWin[0].y + 1].value ===
              currentSquare?.value))
        // &&
        // board[row[0].x][row[0].y - 1].value === currentSquare?.value
      )
        return true;

      return false;
    }
  } else if (type === "diagonLeft") {
    if (_.size(arrWin) === 4) {
      if (
        !_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y - 1]) &&
        !_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y + 1]) &&
        (board[arrWin[0].x + 1][arrWin[0].y - 1].value === null ||
          board[arrWin[0].x + 1][arrWin[0].y - 1].value ===
            currentSquare?.value) &&
        (board[arrWin[0].x - 1][arrWin[0].y + 1].value === null ||
          board[arrWin[0].x - 1][arrWin[0].y + 1].value ===
            currentSquare?.value)
      )
        return true;

      return false;
    } else if (_.size(arrWin) === 5) {
      if (
        (!_.isUndefined(board[arrWin[0].x + 1][arrWin[0].y - 1]) &&
          (board[arrWin[0].x + 1][arrWin[0].y - 1].value === null ||
            board[arrWin[0].x + 1][arrWin[0].y - 1].value ===
              currentSquare?.value)) ||
        (!_.isUndefined(board[arrWin[0].x - 1][arrWin[0].y + 1]) &&
          (board[arrWin[0].x - 1][arrWin[0].y + 1].value === null ||
            board[arrWin[0].x - 1][arrWin[0].y + 1].value ===
              currentSquare?.value))
      )
        return true;

      return false;
    }
  }
  return false;
};

export const isWin = (
  board: any,
  currentSquare?: { x: number; y: number; value: string | null }
) => {
  // Get Row Array;
  const arrRow = () => {
    if (currentSquare) {
      let row: { x: number; y: number; value: string | null }[] = [];
      const x = currentSquare?.x;
      let y = currentSquare?.y;
      for (let i = -4; i < 5; i++) {
        if (
          !_.isUndefined(board[x][y + i]) &&
          board[x][y + i].value === currentSquare.value
        )
          row.push(board[x][y + i]);
      }

      return row;
    }
    return [];
  };

  // Get Col Array;
  const arrCol = () => {
    if (currentSquare) {
      let col: { x: number; y: number; value: string | null }[] = [];
      const x = currentSquare?.x;
      let y = currentSquare?.y;

      // let i = -4;
      // while (i < 5) {
      //   const aa = board[x + i][y];

      //   if (
      //     _.isUndefined(aa)
      //     //  &&
      //     // aa?.value === currentSquare.value
      //   ) {
      //     col.push(aa);
      //   }
      //   console.log(col);
      //   i++;
      // }
      if (x < 11 && x >= 4) {
        for (let i = -4; i < 5; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 3) {
        for (let i = -3; i < 5; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 2) {
        for (let i = -2; i < 5; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
            console.log(col);
          }
        }
      } else if (x === 1) {
        for (let i = -1; i < 5; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 0) {
        for (let i = 0; i < 5; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 11) {
        for (let i = -4; i < 4; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 12) {
        for (let i = -4; i < 3; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 13) {
        for (let i = -4; i < 2; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      } else if (x === 14) {
        for (let i = -4; i < 1; i++) {
          if (
            !_.isUndefined(board[x + i][y]) &&
            board[x + i][y]?.value === currentSquare.value
          ) {
            col.push(board[x + i][y]);
          }
        }
      }

      return col;
    }
    return [];
  };

  // Get diagonR Array;
  const arrDiagonRight = () => {
    if (currentSquare) {
      let diagonR: { x: number; y: number; value: string | null }[] = [];
      const x = currentSquare?.x;
      let y = currentSquare?.y;
      for (let i = -4; i < 5; i++) {
        if (
          !_.isUndefined(board[x + i][y + i]) &&
          board[x + i][y + i].value === currentSquare.value
        )
          diagonR.push(board[x + i][y + i]);
      }
      return diagonR;
      0;
    }
    return [];
  };

  // Get diagonL Array;
  const arrDiagonLeft = () => {
    if (currentSquare) {
      let diagonL: { x: number; y: number; value: string | null }[] = [];
      const x = currentSquare?.x;
      let y = currentSquare?.y;
      for (let i = -4; i < 5; i++) {
        if (
          !_.isUndefined(board[x - i][y + i]) &&
          board[x - i][y + i].value === currentSquare.value
        )
          diagonL.push(board[x - i][y + i]);
      }

      return diagonL;
    }
    return [];
  };

  const checkWin = (
    array: { x: number; y: number; value: string | null }[],
    type?: "row" | "col" | "diagonRight" | "diagonLeft"
  ) => {
    if (type === "row") {
      const isCheckWiner = checkWiner(board, array, currentSquare, type);

      if (isCheckWiner) return true;
      return false;
    } else if (type === "col") {
      const isCheckWiner = checkWiner(board, array, currentSquare, type);

      if (isCheckWiner) return true;
      return false;
    } else if (type === "diagonRight") {
      const isCheckWiner = checkWiner(board, array, currentSquare, type);

      if (isCheckWiner) return true;
      return false;
    } else if (type === "diagonLeft") {
      const isCheckWiner = checkWiner(board, array, currentSquare, type);
      if (isCheckWiner) return true;
      return false;
    }

    return false;
  };

  if (
    checkWin(arrRow(), "row") ||
    checkWin(arrCol(), "col") ||
    checkWin(arrDiagonRight(), "diagonRight") ||
    checkWin(arrDiagonLeft(), "diagonLeft")
  ) {
    return true;
  } else {
    return false;
  }
};

const checkWiner = (
  board: any,
  array: any,
  currentSquare: any,
  type?: "row" | "col" | "diagonRight" | "diagonLeft"
) => {
  let arrWin: { x: number; y: number; value: string | null }[] = [];

  const currentIndex = _.findIndex(array, currentSquare);

  if (_.size(array) < 3) return false;

  if (type === "row") {
    let k = -1;
    for (let i = currentIndex; i >= 0; i--) {
      k = k + 1;
      if (
        !_.isUndefined(array[i]) &&
        !_.isUndefined(currentSquare) &&
        !_.isUndefined(currentSquare?.y) &&
        array[i].value === currentSquare?.value &&
        array[i].y === currentSquare.y - k
      )
        arrWin.unshift(array[i]);
    }

    const isCheckBlock = checkBlock(board, arrWin, currentSquare, type);
    if (isCheckBlock) {
      console.log("Array-Win", arrWin);

      return true;
    } else {
      let b = 0;
      for (let i = currentIndex + 1; i < _.size(array); i++) {
        b = b + 1;

        if (
          !_.isUndefined(array[i]) &&
          !_.isUndefined(currentSquare) &&
          !_.isUndefined(currentSquare?.y) &&
          array[i].value === currentSquare?.value &&
          array[i].y === currentSquare.y + b
        )
          arrWin.push(array[i]);
      }
      const isCheckBlockB = checkBlock(board, arrWin, currentSquare, type);
      if (isCheckBlockB) {
        console.log("Array-Win", arrWin);
        return true;
      }
    }
  } else if (type === "col") {
    let k = -1;
    for (let i = currentIndex; i >= 0; i--) {
      k = k + 1;
      if (
        !_.isUndefined(array[i]) &&
        !_.isUndefined(currentSquare) &&
        !_.isUndefined(currentSquare?.x) &&
        array[i].value === currentSquare?.value &&
        array[i].x === currentSquare.x - k
      )
        arrWin.unshift(array[i]);
    }

    const isCheckBlock = checkBlock(board, arrWin, currentSquare, type);
    if (isCheckBlock) {
      console.log("Array-Win", arrWin);

      return true;
    } else {
      let b = 0;
      for (let i = currentIndex + 1; i < _.size(array); i++) {
        b = b + 1;
        if (
          !_.isUndefined(array[i]) &&
          !_.isUndefined(currentSquare) &&
          !_.isUndefined(currentSquare?.x) &&
          array[i].value === currentSquare?.value &&
          array[i].x === currentSquare.x + b
        )
          arrWin.push(array[i]);
      }
      const isCheckBlockB = checkBlock(board, arrWin, currentSquare, type);
      if (isCheckBlockB) {
        console.log("Array-Win", arrWin);
        return true;
      }
    }
  } else if (type === "diagonRight") {
    let k = -1;
    for (let i = currentIndex; i >= 0; i--) {
      k = k + 1;

      if (
        !_.isUndefined(array[i]) &&
        !_.isUndefined(currentSquare) &&
        !_.isUndefined(currentSquare?.x) &&
        !_.isUndefined(currentSquare?.y) &&
        array[i].value === currentSquare?.value &&
        array[i].x === currentSquare.x - k &&
        array[i].y === currentSquare.y - k
      )
        arrWin.unshift(array[i]);
      console.log(arrWin);
    }

    const isCheckBlock = checkBlock(board, arrWin, currentSquare, type);
    if (isCheckBlock) {
      console.log("Array-Win", arrWin);

      return true;
    } else {
      let b = 0;
      for (let i = currentIndex + 1; i < _.size(array); i++) {
        b = b + 1;
        if (
          !_.isUndefined(array[i]) &&
          !_.isUndefined(currentSquare) &&
          !_.isUndefined(currentSquare?.x) &&
          !_.isUndefined(currentSquare?.y) &&
          array[i].value === currentSquare?.value &&
          array[i].x === currentSquare.x + b &&
          array[i].y === currentSquare.y + b
        )
          arrWin.push(array[i]);
      }
      const isCheckBlockB = checkBlock(board, arrWin, currentSquare, type);
      if (isCheckBlockB) {
        console.log("Array-Win", arrWin);
        return true;
      }
    }
  } else if (type === "diagonLeft") {
    let k = -1;
    for (let i = currentIndex; i >= 0; i--) {
      k = k + 1;
      if (
        !_.isUndefined(array[i]) &&
        !_.isUndefined(currentSquare) &&
        !_.isUndefined(currentSquare?.x) &&
        !_.isUndefined(currentSquare?.y) &&
        array[i].value === currentSquare?.value &&
        array[i].x === currentSquare.x + k &&
        array[i].y === currentSquare.y - k
      )
        arrWin.unshift(array[i]);
    }

    const isCheckBlock = checkBlock(board, arrWin, currentSquare, type);
    if (isCheckBlock) {
      console.log("Array-Win", arrWin);

      return true;
    } else {
      let b = 0;
      for (let i = currentIndex + 1; i < _.size(array); i++) {
        b = b + 1;
        if (
          !_.isUndefined(array[i]) &&
          !_.isUndefined(currentSquare) &&
          !_.isUndefined(currentSquare?.x) &&
          !_.isUndefined(currentSquare?.y) &&
          array[i].value === currentSquare?.value &&
          array[i].x === currentSquare.x - b &&
          array[i].y === currentSquare.y + b
        )
          arrWin.push(array[i]);
      }
      const isCheckBlockB = checkBlock(board, arrWin, currentSquare, type);
      if (isCheckBlockB) {
        console.log("Array-Win", arrWin);
        return true;
      }
    }
  }

  return false;
};
