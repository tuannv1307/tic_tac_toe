// export const getSplitArr = (arr, gridCount = 10) => {
//   return new Array(Math.ceil(arr.length / gridCount))
//     .fill(null)
//     .map((item, i) => arr.slice(gridCount * i, gridCount * i + gridCount));
// };

export const getWinnerRow = (row, col, board = []) => {
  let l_win = [];
  let countmax = 5;
  var mode = 0;
  let Board = board;

  function winHor(x, y) {
    l_win = [];
    var count = 0,
      counto = 0; // count opponent
    var player = board[x];
    console.log("pal", player[x][y]);
    // if (player == null) return false;

    // if (x > 0) {
    //   var p = Board[x][y];
    //   if (p != player && p != -1) counto++;
    // }

    // for (let i = x; i < row; i++) {
    //   var p = Board[i + y * col];
    //   if (p == player && p != -1) {
    //     count++;
    //     l_win.push(i + y * col);
    //   } else {
    //     if (p != -1) counto++;
    //     break;
    //   }
    // }
    // if (count >= countmax) {
    //   if (mode == 0) return true;
    //   else {
    //     if (counto >= 2) return false;
    //     else return true;
    //   }
    // }
    // return false;
  }

  //   function winVer(x,y,Board)
  //   {
  //     l_win = [];
  //     var count = 0, counto = 0;
  //     var player = Board[x + y*size];
  //     if (player == -1) return false;

  //     if (y > 0)
  //     {
  //       var p = Board[x+(y-1)*size];
  //       if (p != player && p != -1) counto++;
  //     }

  //     for (i = y; i < size;i++)
  //     {
  //       var p = Board[x+i*size];
  //       if (p == player && p != -1)
  //       {
  //         count++;
  //         l_win.push(x+i*size);
  //       }
  //       else{ if (p != -1) counto++;break;};
  //     }
  //     if (count >= countmax)
  //     {
  //       if (mode == 0)
  //       return true;
  //       else {
  //           if (counto >= 2) return false;
  //           else return true;
  //          }
  //     }
  //     return false;
  //   }

  //   function winCross1(x,y,Board)
  //   {
  //     l_win = [];
  //     if (x > size-countmax || y < countmax-1) return false;
  //     var count = 0, counto = 0;
  //     var player = Board[x + y*size];
  //     if (player == -1) return false;

  //     if (y < size-1 && x > 0)
  //     {
  //       var p = Board[x-1+(y+1)*size];
  //       if (p != player && p != -1) counto++;
  //     }

  //     for (i = 0; i <= minab(size-x,y);i++)
  //     {
  //       var p = Board[(x+i)+(y-i)*size];
  //       if (p == player && p != -1)
  //       {
  //         count++;
  //         l_win.push((x+i)+(y-i)*size);
  //       }
  //       else{ if (p != -1) counto++;break;};
  //     }
  //     if (count >= countmax)
  //     {
  //       if (mode == 0)
  //       return true;
  //       else {
  //           if (counto >= 2) return false;
  //           else return true;
  //          }
  //     }
  //     return false;
  //   }

  //   function winCross2(x,y,Board)
  //   {
  //     l_win = [];
  //     if (x > size-countmax || y > size-countmax) return false;
  //     var count = 0, counto = 0;
  //     var player = Board[x + y*size];
  //     if (player == -1) return false;

  //     if (y > 0 && x > 0)
  //     {
  //       var p = Board[x-1+(y-1)*size];
  //       if (p != player && p != -1) counto++;
  //     }

  //     for (i = 0; i < minab(size-x,size-y);i++)
  //     {
  //       var p = Board[(x+i)+(y+i)*size];
  //       if (p == player && p != -1)
  //       {
  //         count++;
  //         l_win.push((x+i)+(y+i)*size);
  //       }
  //       else{ if (p != -1) counto++;break;};
  //     }
  //     if (count >= countmax)
  //     {
  //       if (mode == 0)
  //       return true;
  //       else {
  //           if (counto >= 2) return false;
  //           else return true;
  //          }
  //     }
  //     return false;
  //   }

  var result = false;

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (
        winHor(x, y, Board)
        // || winVer(x,y,Board) || winCross1(x,y,Board)
        // || winCross2(x,y,Board)
      ) {
        result = true;
      }
    }
  }
  return result;
};

export const isWin = (board, col, row, turn) => {
  let arrWin;
  let count = 1;
  const checkWinRow = () => {
    for (let i = 0; i < board.length; i++) {
      // Vòng lặp thứ hai áp dụng cho mảng bên trong
      for (let j = 0; j < board[i].length; j++) {
        // Truy xuất các phần tử của từng mảng con
        console.log("i", board[i][j].value);
      }
    }

    if (count > 5) {
      // console.log("abc123");
    }
  };
  // console.log("lenght", board.length);
  console.log("ii", checkWinRow());
};
