import LoginPage from '../../page-objects/pages/LoginPage';
import Transferfunds from '../../page-objects/pages/TransferFunds';

describe('Account Activity scenario', () => {

    beforeEach(() => {
        LoginPage.gotoLoginPage();
        LoginPage.validLogin();
    });

    afterEach(() => {
        LoginPage.logout();
    });

    it('should find account activity', () => {
        Transferfunds.transferMoneyAndMakePayments();
    });

});