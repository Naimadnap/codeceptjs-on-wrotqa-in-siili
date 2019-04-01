const faker = require('faker')
Feature('Home Page');

Scenario('Open home page', (I) => {
    I.amOnPage('/')
    I.see('conduit')
    pause()
});

Scenario('Publish article as new user @wip', (I) => {
    I.amOnPage('/')
    I.see('conduit')
    I.click('Sign up')

    I.fillField('Username', faker.name.firstName())
    I.fillField("input[placeholder='Email']", faker.random.uuid() + faker.internet.email() )
    I.fillField("//input[@placeholder='Password']", faker.commerce.color())

    let signUpButton = locate('foo').find(".btn")
    I.click(signUpButton)

    let newPost = locate('a').withAttr( {href: '/editor'})
    I.waitForVisible(newPost)
    I.click(newPost)

    I.fillField('Article Title', faker.hacker.adjective())
    I.click(signUpButton)

})