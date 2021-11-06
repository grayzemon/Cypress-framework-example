import HomePage from '../../page-objects/pages/HomePage';

describe('Homepage search scenario', () => {

    before(function() {
        HomePage.gotoHomePage();
    })

    it('Should type into searchbox and submit by pressing enter', () => {
        HomePage.search('payments');    
    });

})
