import LoginPage from '../../page-objects/pages/LoginPage';
import Transferfunds from '../../page-objects/pages/TransferFunds';

describe('Transfer money and make payments', () => {

    beforeEach(() => {
        LoginPage.gotoLoginPage();
        LoginPage.validLogin();
    });

    afterEach(() => {
        LoginPage.logout();
    });

    it('should find account activity', () => {
        Transferfunds.transferMoneyAndMakePayments();
        cy.screenshot();  
    });

});