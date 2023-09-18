after(() => {
    cy.exec('rm -rf ~/.cache/Cypress', { log: false, failOnNonZeroExit: false });
  });
  