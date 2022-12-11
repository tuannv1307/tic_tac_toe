import { useState, useEffect, KeyboardEvent } from "react";
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

  const { arrWin, isWinner, typeWinner }: any = isWin(squares, currentSquare);

  useEffect(() => {
    _.isBoolean(isWinner) &&
      isWinner &&
      dispatch(winner({ isWinner, arrWin, typeWinner }));
  }, [squares, currentSquare, playerToWin]);

  useEffect(() => {
    if (isWinner === true) {
      setCurrentPlayer(`Winner: ${isStarted === true ? "X" : "O"}`);
    } else {
      setCurrentPlayer("Draw");
    }
  }, [winner, isWinner]);

  function getStatus() {
    if (playerToWin) {
      return currentPlayer;
    } else {
      return "Next player: " + isPlayer;
    }
  }

  const handleChangeBoard = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(changeBoard({ boardSize }));
    }
  };

  return (
    <div className={st(classes.root)} data-hook="app">
      <div className={st(classes.game)}>
        <div className={st(classes.setting)}>
          <p className={st(classes.chooseSize)}>Choose board size:</p>
          <h3>X: </h3>
          <input
            type="number"
            value={boardSize?.x}
            onChange={(e) =>
              setBoardSize({ ...boardSize, x: _.toNumber(e.target.value) })
            }
            onKeyDown={(e) => handleChangeBoard(e)}
            data-hook="seclect-x"
            className={st(classes.newValueSelect)}
          />
          <h3>Y: </h3>
          <input
            type="number"
            value={boardSize?.y}
            onChange={(e) =>
              setBoardSize({ ...boardSize, y: _.toNumber(e.target.value) })
            }
            onKeyDown={(e) => handleChangeBoard(e)}
            data-hook="seclect-y"
            className={st(classes.newValueSelect)}
          />
        </div>
        <ActionBtn />
        <div className={st(classes.gameInfo)} data-hook="status">
          {getStatus()}
        </div>
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
