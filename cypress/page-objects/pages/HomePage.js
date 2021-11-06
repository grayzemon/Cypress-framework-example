import BasePage from '../BasePage';

export default class HomePage extends BasePage {
    
    static gotoHomePage() {
        cy.visit(this.BaseURL);
        cy.get('h4').should('be.visible').and('contain','Online Banking');
    } 

    static search(text) {
        cy.get('#searchTerm').type(text + '{enter}'); 
        cy.get('h2').contains('Search Results:')
    }
}