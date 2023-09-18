import ActionUrgentCarePage from '../../support/page-objects/actionUrgentCarePage';

describe('Verify In-Clinic Care Appointment Creation', () => {
  before(() => {
    cy.on('uncaught:exception', (e) => {
      if (e.message.includes('null')) {
        return false;
      }
    });

    ActionUrgentCarePage.visit();
    ActionUrgentCarePage.hoverOverInClinicCare();
    ActionUrgentCarePage.clickOnLocation('San Jose - Blossom Hill Rd.');
    ActionUrgentCarePage.isHeaderVisible('San Jose - Blossom Hill Rd.');
    ActionUrgentCarePage.isSelectAppointmentTimeVisible();
    ActionUrgentCarePage.clickOnAppointmentTime();
    ActionUrgentCarePage.clickOnSelectButton();
    ActionUrgentCarePage.selectReasonForConsultation('Cough');
    cy.window().then((win) => {
      cy.stub(win, 'open')
        .callsFake((url) => {
          return win.open.wrappedMethod.call(win, url, '_self');
        })
        .as('open');
    });
    cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click({ force: true });
    cy.get('@open').should(
      'have.been.calledWithMatch',
      'https://kyla.com/'
    );
  });

  it('Should assert Confirm Appointment and location', () => {
    cy.origin('https://kyla.com', () => {
      cy.contains('Confirm Appointment').should('be.visible');
      cy.contains('San Jose - Blossom Hill Rd.').should('be.visible');
    });
  });
});

after(() => {
  cy.window().then((win) => {
    win.location.href = '/';
  });
});
