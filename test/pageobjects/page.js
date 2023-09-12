const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
       
        return browser.url('https://www.abcmouse.com/')
    }

    openpage2 (path){
        return browser.url('https://www.abcmouse.com/abc/prospect-register/')
    }

    openpage3 (path){
        return browser.url('https://www.abcmouse.com/abc/subscription')
    }

}
