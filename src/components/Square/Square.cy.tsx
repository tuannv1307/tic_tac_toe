import Square from "./Square";
import { Provider } from "react-redux";
import store from "../../store/store";
describe("Square.cy.tsx", () => {
  it("is true", () => {
    cy.viewport(1000, 1000);
    expect(true).to.be.true; // yup, fine
  });

  it("is true", () => {
    cy.viewport(1000, 1000);

    let value;
    cy.mount(
      <Provider store={store}>
        <Square value={value} />
        <Square value={value} />
        <Square value={value} />
      </Provider>
    );
  });
});
