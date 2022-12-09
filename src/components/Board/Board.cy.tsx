import Board from "./Board";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Todos.cy.tsx", () => {
  it("show mount", () => {
    cy.viewport(1000, 500);
    cy.mount(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    cy.get('[data-hook="board"]');
  });
});
