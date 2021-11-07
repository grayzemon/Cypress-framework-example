import FeedBackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback scenario with fixtures', () => {
    before(() => {
        FeedBackPage.load();  
    });

    it('should submit feedback from', () => {
        FeedBackPage.submitFeedback();
        cy.screenshot();  
    });
});