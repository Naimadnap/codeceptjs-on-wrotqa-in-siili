
Feature('Home Page');

Scenario('Open home page', (I) => {
    I.amOnPage('/')
    I.see('conduit')

});
