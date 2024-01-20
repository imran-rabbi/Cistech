import codegenerator from "../PageObject/codegen.ob";
import data from "../fixtures/codegenerator.json";

const codegen = new codegenerator();


describe('Code genrator', () => {
  it('Code generator Page', () => {
    cy.visit(data.url)
    cy.url().should('include','cisstaging')
    codegen.getCodeGeneratorButton().click();
    cy.wait(500)
    codegen.getNameField().type(data.cardname)
    cy.wait(500)
    codegen.getfirstnamefield().type(data.firstname)
    codegen.getlastnamefield().type(data.lastname)
    codegen.getphonenumberfield().type(data.phonenumber).type('{enter}')
    codegen.getaltnumberfield().type(data.altphnnumber)
    codegen.getEmailfield().type(data.email)
    codegen.getPersonalwebfield().type(data.personalwebsite)
    codegen.getCompanynamefield().type(data.companyname)
    codegen.getProfessionfield().type(data.profession)
    codegen.getSummaryfield().type(data.summary)
    codegen.getStreetfield().type(data.street)
    codegen.getpostalfield().type(data.postalcode)
    codegen.getCityfield().type(data.city)
    codegen.getstatefield().type(data.state)
    codegen.getCountryfield().type(data.country).type('{enter}')
    codegen.GetSocialmediaField().click()
    codegen.GeturlField().type(data.facebook)
    codegen.getSubmitfield().click();
    cy.wait(200)
    codegen.getXButton().click()
    
    

    
  
    
  });
  })
