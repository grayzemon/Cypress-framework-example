import BasePage from '../BasePage'

export default class LoginPage extends BasePage {

    static gotoLoginPage() {
        cy.visit(this.BaseURL + 'login.html');
        cy.get('h3').should('be.visible').and('contain','Log in to ZeroBank');
    } 

    static validLogin() {
        
        cy.fixture('user').then(user => {  
            cy.get('#login_form').should('be.visible');
            cy.get('#user_login').type(user.id);
            cy.get('#user_password').type(user.pwd);
            cy.get('#user_remember_me').click();
            cy.contains('Sign in').click();
            this.loggedIn();
        });

    }

    static login(username,password) {
        cy.get('#login_form').should('be.visible');
        cy.get('#user_login').type(username);
        cy.get('#user_password').type(password);
        cy.get('#user_remember_me').click();
        cy.contains('Sign in').click();
    }

    static passwordReset(email) {
        cy.get('.offset3 > a').click();
        cy.get('#user_email').type(email);
        cy.contains('Send Password').click();
    }

    static displayErrorMessage() {
        LoginPage.isVisible('.alert-error');
        cy.get('.alert-error').contains('Login and/or password are wrong.');
    }

    static loggedIn() {
        LoginPage.isVisible('.icon-cog');
    }

}