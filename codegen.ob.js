class CodeGeneratorPage{

    getCodeGeneratorButton(){
        //return cy.contains('Cerate my QR code')
        return cy.get('a[href="/generator"]')
    }
    getNameField(){
        return cy.get('[placeholder="e.g. My first QR code"]')
    }
    getColor(){
        return cy.get('[style="background-color:#ecedf1"]')
    }
    getfirstnamefield(){
        return cy.get('input[type="text"][name="first_name"]')
    }
    getlastnamefield(){
        return cy.get('input[type="text"][name="last_name"]')
    }  
    // attachimagefield(){
    
    //     return cy.get('.ant-typography-default')
    // }
    getphonenumberfield(){
        return cy.get('input[type="number"][name="phone"]')
    }

    getaltnumberfield(){
        return cy.get('input[type="text"][name="alt_phone"]')
    }

    getEmailfield(){
        return cy.get('input[type="text"][name="email"]')
    }
    getPersonalwebfield(){
        return cy.get('input[type="text"][name="personal_web"]')
    }
    getCompanynamefield(){
        return cy.get('input[type="text"][name="company"]')
    }
    getProfessionfield(){
        return cy.get('input[type="text"][name="profession"]')
    }
    getSummaryfield(){
        return cy.get('[placeholder="e.g. About my company"]')
    }
    getStreetfield(){
        return cy.get('input[type="text"][name="street"]')
    }
    getpostalfield(){
        return cy.get('input[type="text"][name="postal_code"]')
    }
    getCityfield(){
        return cy.get('input[type="text"][name="city"]')
    }
    getstatefield(){
        return cy.get('[placeholder="e.g. New York"]')
    }
    getCountryfield(){
        return cy.get('#country')
        
    }
    GetSocialmediaField(){
        return cy.get('[src="./assets/images/facebook.svg"]')
    }
    GeturlField(){
        return cy.get('[placeholder="e.g. www.social-media.com"]')
    }
    getSubmitfield(){
         return cy.get('.ant-btn-primary:last')
    }
    getXButton(){
        return cy.get('[class="ant-modal-close"]')
    }

}
export default CodeGeneratorPage