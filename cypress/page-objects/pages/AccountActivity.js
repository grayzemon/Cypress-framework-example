import BasePage from '../BasePage';

export default class AccountActivity extends BasePage {

    static selectShowTransactionsTab() {
        AccountActivity.clickActivity();
        cy.contains('Show Transactions').click();
        cy.get('#ui-tabs-1 > h2').contains('Show Transactions');
    }

    static selectFindTransactionsTab() {
        AccountActivity.clickActivity();
        cy.contains('Find Transactions').click();
        cy.get('#ui-tabs-2 > h2').contains('Find Transactions');
    }

    static findTransactions() {
        this.selectFindTransactionsTab();
        cy.get('#aa_fromAmount').type('200');
        cy.get('#aa_toAmount').type('1000');
        cy.get('button[type="submit"]').click();
        cy.get('#filtered_transactions_for_account').should('be.visible');
        cy.get('tbody > tr').its('length').should('be.gt',3);
    }

    static showTransactions() {
        this.selectShowTransactionsTab();
        cy.get('#aa_accountId').select('Checking');
        cy.get('#all_transactions_for_account').should('be.visible');
        cy.get('tbody > tr').its('length').should('be.gt',2);
    }

}