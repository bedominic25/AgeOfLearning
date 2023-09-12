const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubscriptionPage extends Page {
    /**
     * define selectors using getter methods
     */
    get becomeMemberSelector () {
        return $('#');
    }

    async verifySubPage(){
        await expect(this.becomeMemberSelector()).toBeExisting()
    }

    open(){
        return super.openpage3('verifySubPage');
    }
}

module.exports = new SubscriptionPage();
