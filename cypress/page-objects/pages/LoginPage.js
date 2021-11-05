import BasePage from '../BasePage'

export default class LoginPage extends BasePage {

    static login(username,password) {
        cy.login(username,password);
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot your password ?');
    }

    static displayErrorMessage() {
        cy.isVisible('.alert-error');
    }

}