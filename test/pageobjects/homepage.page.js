const { $ } = require('@wdio/globals')
const Page = require('./page');


class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnSignUp () {
        return $("*=SignUp");
       
    }

    /**
     * Functions
     * 
     */
    async signUp () {
        await this.btnSignUp.click();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signUp');
    }
}

module.exports = new HomePage();
