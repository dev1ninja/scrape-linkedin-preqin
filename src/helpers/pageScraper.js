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

        console.log('first proxy page load finished')

        let link = "http://hdl.library.upenn.edu/1017/90974";
        let mainPage = await browser.newPage();
        await mainPage.goto(link);

        await mainPage.waitForSelector('#login-div');
        console.log("login page load finished");

        await mainPage.type('#pennname', USER_NAME);
        await mainPage.type('#password', PASSWORD);

        await mainPage.click('.btn');

        await mainPage.waitForSelector('#ctl00_ctl00_preqin');

        await mainPage.click('#ctl00_ctl00_btnGoToPro');
        await mainPage.waitForSelector('.dashboard__grid');

        await mainPage.goto('https://pro-preqin-com.proxy.library.upenn.edu/discover/investors');
        await mainPage.waitForSelector('.defaultInvestor');
        console.log("Search result loaded")
        // await browser.close();
        //#penntoken
    }
}

module.exports = scraperObject;