import LoginPage from '../../page-objects/pages/LoginPage';
import HomePage from '../../page-objects/pages/HomePage';

describe('Login and forgot password scenarios', () => {

    beforeEach(() => {
        HomePage.gotoHomePage();
        HomePage.clickSignIn();
    });

    it('should check error message for invalid credentials', () => {
        LoginPage.login('badUsername', 'badPassword');
        LoginPage.displayErrorMessage();
        cy.screenshot();  
    });

    it('should login and out of application', () => {
        LoginPage.validLogin();
        cy.screenshot();  
        HomePage.logout();
        HomePage.displaySignInButton();
    });

    it('Should reset the password', () => {
        LoginPage.passwordReset('test@test.com');
        cy.screenshot();  
    });

});