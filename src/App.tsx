import { ChangeEvent, useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";
import store from "./store/store";
import { redo, reStart, TicTacToe, undo } from "./store/tictactoeReducer";
import Board from "./components/Board";
import ActionBtn from "./components/ActionBtn";
import { st, classes } from "./App.st.css";
import "./globals.st.css";
import { getWinnerRow } from "./utils";

function App() {
  const tictactoe: TicTacToe = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe
  );

  let { squares, marksToWin, isPlayer, isStarted }: any =
    tictactoe?.presentState;
  const [value, setValue] = useState<string>("10");

  const [winnerRow, setWinnerRow] = useState<any[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState<null | string>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    const winner: any = getWinnerRow(squares, parseInt(value), marksToWin);
    !_.isEmpty(winner) && setWinnerRow(winner);
  }, [marksToWin, squares, value]);

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

  const reset = () => {
    setCurrentPlayer(isPlayer);
    squares = [];
    isStarted = true;
    setWinnerRow([]);
  };

  const handleChangeSeclect = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    dispatch(reStart());
  };

  return (
    <div className={st(classes.root)} data-hook="App">
      <div className={st(classes.game, { value })}>
        <div className={st(classes.setting)}>
          <p className={st(classes.chooseSize)}>Choose board size:</p>
          <select
            className={st(classes.boardSize)}
            onChange={handleChangeSeclect}
            value={value}
          >
            <option value="10">10x10</option>
            <option value="15">15x15</option>
            <option value="20">20x20</option>
            <option value="30">30x30</option>
            <option value="40">40x40</option>
            <option value="50">50x50</option>
          </select>
        </div>
        <div className={st(classes.gameInfo)}>{getStatus()}</div>
        <Board
          squares={squares}
          isPlayer={isPlayer}
          isStarted={isStarted}
          value={value}
          lengthWinnerRow={lengthWinnerRow}
        />
        <ActionBtn showBtn={showBtn} />
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
