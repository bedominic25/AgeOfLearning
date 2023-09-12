const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmailPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputemail () {
        return $('#email');
    }
    get btnSubmit () {
        return $('*=Submit');
    }

    async enterEmail(email){
        await (await this.inputemail).setValue(email)
        (await this.btnSubmit).click();
    }


    open(){
        return super.openpage2('enterEmail');
    }
}

module.exports = new EmailPage();
