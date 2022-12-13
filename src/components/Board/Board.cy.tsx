import { Provider } from "react-redux";
import store from "../../store/store";
import Board from "./Board";

describe("Board.cy.tsx", () => {
  it("is true", () => {
    cy.viewport(1000, 1000);
    expect(true).to.be.true;
  });
  it("show board", () => {
    cy.viewport(1000, 1000);

    cy.mount(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    cy.get('[data-hook="board"]').invoke("show");
  });
});
