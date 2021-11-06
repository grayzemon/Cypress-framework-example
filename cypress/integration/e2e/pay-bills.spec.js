import LoginPage from '../../page-objects/pages/LoginPage';
import PayBills from '../../page-objects/pages/PayBills'

describe('Pay Bills scenarios', () => {

    beforeEach(() => {
        LoginPage.gotoLoginPage();
        LoginPage.validLogin();
    });

    afterEach(() => {
        LoginPage.logout();
    });

    it('should add new payee to the list', () => {
        PayBills.addNewPayee();
    });

    it('should create a saved payee', () => {
        PayBills.paySavedPayee();
    });

    it('should purchase foreign currency', () => {
        PayBills.PurchaseForeignCurrency();
    });

});