export default class CypressUtils {

        static pause(ms) {
            cy.wait(ms);
        }
    
        static logInfo(message) {
            cy.log(message);
        }
    
        static setMobileViewPort() {
            cy.viewport('iphone-x');
        }
    
        static setTabletViewPort() {
            cy.viewport('ipad-2');
        }
    
        static setDesktopViewPort() {
            cy.viewport('macbook-13');
        }
    
        static setLargeDesktopViewPort() {
            cy.viewport(1980,1080);
        }
    
        static isVisible(selector) {
            cy.get(selector).should('be.visible');
        }
    
        static shouldNotExist(selector) {
            cy.get(selector).should('not.exist');
        }
        
    }