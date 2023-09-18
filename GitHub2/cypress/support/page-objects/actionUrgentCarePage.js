class ActionUrgentCarePage {
    visit() {
      cy.visit('https://actionurgentcare.com/');
    }
  
    hoverOverInClinicCare() {
      cy.contains('In-Clinic Care').trigger('mouseover');
    }
  
    clickOnLocation(location) {
      cy.contains(location).click();
    }
  
    isHeaderVisible(headerText) {
      cy.contains('h1', headerText).should('be.visible');
    }
  
    isSelectAppointmentTimeVisible() {
      cy.contains('Select Appointment Time').should('be.visible');
    }
  
    clickOnAppointmentTime() {
      cy.get('body div[id="__next"] div[id="appointments-widget"] div div div div div div div').eq(0).click({ force: true });
    }
  
    clickOnSelectButton() {
      cy.get('.MuiButton-root.MuiButton-contained').click({ force: true });
    }
  
    selectReasonForConsultation(reason) {
      cy.contains('Reason for Consultation').should('be.visible');
      cy.contains(reason).click({ force: true });
    }
  }
  
  export default new ActionUrgentCarePage();
