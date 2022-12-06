import App from "./App";

describe("App.cy.tsx", () => {
  it("is true", () => {
    cy.viewport(1000, 1000);
    expect(true).to.be.true; // yup, fine
  });

  it("is true", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);
  });
});
