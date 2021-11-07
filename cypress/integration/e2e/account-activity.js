import LoginPage from '../../page-objects/pages/LoginPage';
import AccountActivity from '../../page-objects/pages/AccountActivity'

describe('Account Activity scenarios', () => {

    beforeEach(() => {
        LoginPage.gotoLoginPage();
        LoginPage.validLogin();
    });

    afterEach(() => {
        LoginPage.logout();
    });

    it('should find account activity', () => {
        AccountActivity.findTransactions();
        cy.screenshot();  
    });

    it('should show account activity', () => {
        AccountActivity.showTransactions();
        cy.screenshot();  
    });

});