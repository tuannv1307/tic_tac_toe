import Square from "./Square";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Square.cy.tsx", () => {
  it("is true", () => {
    cy.viewport(1000, 1000);
    expect(true).to.be.true; // yup, fine
  });

  it("show mount square", () => {
    cy.viewport(1000, 1000);

    let square1 = { x: 0, y: 4, value: null };
    let square2 = { x: 0, y: 5, value: "O" };
    let square3 = { x: 0, y: 6, value: null };
    cy.mount(
      <Provider store={store}>
        <Square square={square1} />
        <Square square={square2} />
        <Square square={square3} />
      </Provider>
    );

    cy.get('[data-hook="square"]').should(($squa) => {
      expect($squa).to.have.length(3);
      expect($squa.eq(0)).to.contain("");
      expect($squa.eq(1)).to.contain("O");
      expect($squa.eq(2)).to.contain("");
    });
  });

  it("show mount square with background ang color", () => {
    cy.viewport(1000, 1000);

    let square1 = { x: 0, y: 0, value: null };
    let square2 = { x: 0, y: 1, value: "O" };
    let square3 = { x: 0, y: 2, value: null };

    cy.mount(
      <Provider store={store}>
        <Square square={square1} />
        <Square square={square2} />
        <Square square={square3} />
      </Provider>
    );
    cy.get('[data-hook="square"]')
      .eq(1)
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .and("have.css", "color", "rgb(66, 66, 66)");
  });
});
