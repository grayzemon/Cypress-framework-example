import BasePage from '../BasePage'

export default class PayBills extends BasePage {

    static selectPaySavedPayeeTab() {
        PayBills.clickPayBills();
        cy.contains('Pay Saved Payee').click();
        cy.get('#ui-tabs-1 > h2').contains('Make payments to your saved payees');

    }

    static selectAddNewPayeeTab() {
        PayBills.clickPayBills();
        cy.contains('Add New Payee').click();
        cy.get('#ui-tabs-2 > h2').contains('Who are you paying?');
    }

    static SelectPurchaseForeignCurrency() {
        PayBills.clickPayBills();
        cy.contains('Purchase Foreign Currency').click();
        cy.get('#ui-tabs-3 > h2').contains('Purchase foreign currency cash');
    }

    static paySavedPayee() {
        PayBills.selectPaySavedPayeeTab();
        cy.get('#sp_payee').select('wellsfargo');
        cy.get('#sp_account').select('Credit Card');
        cy.get('#sp_amount').type('20.45');
        cy.get('#sp_date').type('2023-03-04 {enter}');
        cy.get('#sp_description').type('just a description');
        cy.get('#pay_saved_payees').click();
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain','The payment was successfully submitted.'); 
    }

    static addNewPayee() {
        PayBills.selectAddNewPayeeTab();
        cy.fixture('payBills').then(payee => {
            cy.get('#np_new_payee_name').type(payee.name);
            cy.get('#np_new_payee_address').type(payee.address);
            cy.get('#np_new_payee_account').type(payee.accountNumber);
            cy.get('#np_new_payee_details').type(payee.details);
            cy.get('#add_new_payee').click();
            cy.get('#alert_content')
            .should('be.visible')
            .and('contain',`The new payee ${payee.name} was successfully created.`)
        });
    }

    static PurchaseForeignCurrency() {
        PayBills.SelectPurchaseForeignCurrency();
        cy.get('#pay_bills_tab').click();
        cy.contains('Purchase Foreign Currency').click();
        cy.get('#pc_currency').select('GBP');
        cy.get('#pc_amount').type('2000');
        cy.get('#pc_inDollars_true').click();
        cy.get('#pc_calculate_costs').click(); 
        cy.get('#pc_conversion_amount')
            .should('contain','1180.50')
    }

}