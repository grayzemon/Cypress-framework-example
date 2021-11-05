import {url,login_username,login_password} from '../../../config';
import NavBar from '../../page-objects/components/Navbar';
import LoginPage from '../../page-objects/pages/LoginPage';

describe('Login Failed Test', () => {

    before(() => {
        cy.visit(url);
        NavBar.clickSignIn();
    });

    it('should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password');
    });

    it('should display error message', () => {
        LoginPage.displayErrorMessage();
    });

});

describe('Login Success Test', () => {

    before(() => {
        cy.visit(url);
        NavBar.clickSignIn();
    });

    it('should login into application', () => {
        LoginPage.login(login_username,login_password);
    });

    it('should logout from application', () => {
        NavBar.logout();
        NavBar.displaySignInButton();
    });
    
});