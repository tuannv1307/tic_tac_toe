import { ChangeEvent, useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";
import store from "./store/store";
import {
  redo,
  reStart,
  TicTacToe,
  undo,
  init,
  changeBoard,
} from "./store/tictactoeReducer";
import Board from "./components/Board";
import ActionBtn from "./components/ActionBtn";
import { st, classes } from "./App.st.css";
import "./globals.st.css";
import { getWinnerRow, isWin } from "./utils";

function App() {
  const tictactoe: TicTacToe = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe
  );

  let { squares, marksToWin, isPlayer, isStarted }: any =
    tictactoe?.presentState;

  const [boardSize, setBoardSize] = useState<
    { x?: number; y?: number } | undefined
  >(tictactoe?.presentState?.boardSize);

  const [winnerRow, setWinnerRow] = useState<any[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState<null | string>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  useEffect(() => {
    setBoardSize(tictactoe?.presentState?.boardSize);
  }, [tictactoe?.presentState?.boardSize]);

  // useEffect(() => {
  //   const winner: any = getWinnerRow(squares, parseInt(value), marksToWin);
  //   !_.isEmpty(winner) && setWinnerRow(winner);
  // }, [marksToWin, squares, value]);
  console.log("abc", isWin(squares, boardSize?.y, boardSize?.x, isPlayer));
  let lengthWinnerRow = winnerRow?.length;

  const sign = squares[winnerRow[0]];

  useEffect(() => {
    if (winnerRow) {
      if (lengthWinnerRow) {
        if (sign !== null) {
          setCurrentPlayer(`Winner: ${sign}`);
        }
      } else {
        setCurrentPlayer("Draw");
      }
    }
  }, [winnerRow]);

  function getStatus() {
    if (lengthWinnerRow >= marksToWin - 1) {
      return currentPlayer;
    } else {
      return "Next player: " + isPlayer;
    }
  }

  const showBtn = (type: string) => {
    try {
      switch (type) {
        case "UNDO":
          dispatch(undo());
          break;
        case "REDO":
          dispatch(redo());
          break;
        default:
          dispatch(reStart());
          setWinnerRow([]);
          if (!_.isEmpty(squares)) {
            sign === "O" ? (isStarted = true) : (isStarted = false);
          }

          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeBoard = (e?: any) => {
    if (e.code === "Enter") {
      dispatch(changeBoard({ boardSize }));
    }
  };

  return (
    <div className={st(classes.root)} data-hook="App">
      <div className={st(classes.game)}>
        <div className={st(classes.setting)}>
          <p className={st(classes.chooseSize)}>Choose board size:</p>
          X:
          <input
            type="number"
            value={boardSize?.x}
            onChange={(e) =>
              setBoardSize({ ...boardSize, x: _.toNumber(e.target.value) })
            }
            onKeyDown={(e) => handleChangeBoard(e)}
          />
          Y:
          <input
            type="number"
            value={boardSize?.y}
            onChange={(e) =>
              setBoardSize({ ...boardSize, y: _.toNumber(e.target.value) })
            }
            onKeyDown={(e) => handleChangeBoard(e)}
          />
        </div>
        <div className={st(classes.gameInfo)}>{getStatus()}</div>
        <Board lengthWinnerRow={lengthWinnerRow} />
        <ActionBtn />
      </div>
    </div>
  );
}

function AppProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppProvider;
