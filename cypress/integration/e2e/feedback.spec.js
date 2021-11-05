import FeedBackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
    before(() => {
        FeedBackPage.load();
    });

    it('should submit feedback from', () => {
        FeedBackPage.submitFeedback();
    });
});