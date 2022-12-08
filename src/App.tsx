import { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";
import store from "./store/store";
import { TicTacToe, init, changeBoard, winner } from "./store/tictactoeReducer";
import Board from "./components/Board";
import ActionBtn from "./components/ActionBtn";
import { st, classes } from "./App.st.css";
import "./globals.st.css";
import { isWin } from "./utils";

function App() {
  const tictactoe: TicTacToe = useSelector(
    (state: { tictactoe: TicTacToe }) => state.tictactoe
  );

  let { squares, isPlayer, isStarted, playerToWin, currentSquare }: any =
    tictactoe?.presentState;

  const [boardSize, setBoardSize] = useState<
    { x?: number; y?: number } | undefined
  >(tictactoe?.presentState?.boardSize);

  const [currentPlayer, setCurrentPlayer] = useState<null | string>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  useEffect(() => {
    setBoardSize(tictactoe?.presentState?.boardSize);
  }, [tictactoe?.presentState?.boardSize]);

  const checkWin = isWin(squares, currentSquare);

  useEffect(() => {
    !_.isUndefined(checkWin) && dispatch(winner({ checkWin }));
  }, [squares, currentSquare, playerToWin]);

  useEffect(() => {
    if (checkWin === true) {
      setCurrentPlayer(`Winner: ${isStarted === true ? "X" : "O"}`);
    } else {
      setCurrentPlayer("Draw");
    }
  }, [winner, checkWin]);

  console.log(checkWin);
  function getStatus() {
    if (playerToWin) {
      return currentPlayer;
    } else {
      return "Next player: " + isPlayer;
    }
  }
  // console.log(checkWin);
  const handleChangeBoard = (e?: any) => {
    if (e.code === "Enter") {
      dispatch(changeBoard({ boardSize }));
    }
  };

  return (
    <div className={st(classes.root)} data-hook="App">
      <ActionBtn />
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
        <Board />
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
