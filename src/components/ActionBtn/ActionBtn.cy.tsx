import ActionBtn from "./ActionBtn";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("ActionBtn.cy.tsx", () => {
  it("show mount", () => {
    cy.viewport(1000, 500);
    cy.mount(
      <Provider store={store}>
        <ActionBtn />
      </Provider>
    );
  });
  it("show mount with shound", () => {
    cy.viewport(1000, 500);
    cy.mount(
      <Provider store={store}>
        <ActionBtn />
      </Provider>
    );

    cy.get('[data-hook="undo"]').contains("Undo");

    cy.get('[data-hook="redo"]').contains("Redo");

    cy.get('[data-hook="restart"]').contains("Play again");
  });
  it("show mount with click button", () => {
    cy.viewport(1000, 500);
    cy.mount(
      <Provider store={store}>
        <ActionBtn />
      </Provider>
    );

    cy.get('[data-hook="undo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="redo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="restart"]').click();
  });
});
