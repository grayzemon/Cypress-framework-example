import CypressUtils from '../utils/CypressUtils';

export default class BasePage extends CypressUtils {

    static BaseURL = 'http://zero.webappsecurity.com/'

    static clickSummary() {
        cy.get('#account_summary_tab').click();
    }

    static clickActivity() {
        cy.get('#account_activity_tab').click();
    }

    static clickTransferFunds() {
        cy.get('#transfer_funds_tab').click();
    }

    static clickPayBills() {
        cy.get('#pay_bills_tab').click();
    }

    static clickMoneyApp() {
        cy.get('#money_map_tab').click();
    }

    static clickOnlineStatement() {
        cy.get('#online_statements_tab').click();
    }

    static clickOnLogo() {
        cy.get('.brand').click();
    }

    static search(text) {
        cy.get('#searchTerm').type(`${text} {enter}`);
    }

    static clickSignIn() {
        cy.get('#signin_button').click();
    }

    static clickSettings() {
       cy.contains('Settings').click(); 
    }

    static logout() {
        cy.contains('username').click();
        cy.get('#logout_link').click();
    }

    static displaySignInButton() {
        BasePage.isVisible('#signin_button')
    }
    
}