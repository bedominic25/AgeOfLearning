const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/homepage.page')
const EmailPage = require('../pageobjects/email.page')
const SubscriptionPage = require('../pageobjects/subscription.page')

describe('My Login application', () => {   

    it('should login with valid credentials', async () => {
        await HomePage.open()
        await HomePage.signUp()
        await expect(HomePage.signUp).toHaveText('Sign Up')
        await(4000)
        await EmailPage.openpage2()
        await(4000)
        await EmailPage.enterEmail('abc123@gmail.com')
        await EmailPage.btnSubmit()
        await SubscriptionPage.verifySubPage();
       

        
    })
})

