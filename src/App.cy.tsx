import App from "./App";

describe("App.cy.tsx", () => {
  beforeEach(() => {
    cy.wait(2000);
  });

  it("is true", () => {
    cy.viewport(1000, 1000);
    expect(true).to.be.true; // yup, fine
  });

  it("click square", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="square"]')
      .eq(59)
      .click({ multiple: true })
      .prevAll()
      .click({ multiple: true });

    // cy.get('[data-hook="square"]').eq(50).click();
  });

  it("click undo redo", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="square"]').eq(1).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(40).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(60).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(70).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(71).click();
    cy.wait(2000);

    cy.get('[data-hook="undo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="redo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="undo"]').click();
    cy.wait(2000);
  });

  it("click restart", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="square"]').eq(1).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(40).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(60).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(70).click();
    cy.wait(2000);
    cy.get('[data-hook="square"]').eq(71).click();
    cy.wait(2000);

    cy.get('[data-hook="undo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="redo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="undo"]').click();
    cy.wait(2000);
    cy.get('[data-hook="restart"]').click();
  });

  it("check value x, y", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="seclect-x"]').should("have.value", 15);

    cy.get('[data-hook="seclect-y"]').should("have.value", 15);
  });
  it("change value x, y", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="seclect-x"]')
      .clear()
      .type("2")
      .trigger("keydown", { key: "Enter" });
    cy.wait(2000);
    cy.get('[data-hook="seclect-y"]')
      .clear()
      .type("2")
      .trigger("keydown", { key: "Enter" });
    cy.wait(2000);
    cy.get('[data-hook="restart"]').click();
    cy.get('[data-hook="restart"]').trigger("click");
  });

  it("hover action", () => {
    cy.viewport(1000, 1000);

    cy.mount(<App />);

    cy.get('[data-hook="undo"]').should("be.visible").invoke("show");
  });
});
