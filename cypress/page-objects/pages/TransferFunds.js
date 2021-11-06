import BasePage from "../BasePage";

export default class Transferfunds extends BasePage {

    static transferMoneyAndMakePayments()  {

        Transferfunds.clickTransferFunds();
        cy.get('#transfer_funds_tab').click();
        cy.get('#tf_fromAccountId').select('2');
        cy.get('#tf_toAccountId').select('4');
        cy.get('#tf_amount').type('1000');
        cy.get('#tf_description').type('description');
        cy.get('#btn_submit').click();
        cy.get('#tf_fromAccountId').should('have.value','Checking');
        cy.get('#tf_toAccountId').should('have.value','Loan');
        cy.get('#tf_amount').should('have.value','1000');
    }

}