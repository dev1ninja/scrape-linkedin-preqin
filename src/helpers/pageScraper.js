const { FIRST_PAGE } = require('../reqParams/urls/urls');
const { USER_NAME, PASSWORD } = require('../reqParams/loginInfo/login_info');

const scraperObject = {
    url: FIRST_PAGE,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        //Navigate to the selected page
        await page.goto(this.url);
        
        await page.waitForSelector('.normal');

        console.log('Success load')

        let link = "http://hdl.library.upenn.edu/1017/90974";
        let mainPage = await browser.newPage();
        await mainPage.goto(link);

        await mainPage.waitForSelector('#login-div');
        console.log("load finished");

        await mainPage.type('#pennname', USER_NAME);
        await mainPage.type('#password', PASSWORD);

        await mainPage.click('.btn');

        //#penntoken
    }
}

module.exports = scraperObject;