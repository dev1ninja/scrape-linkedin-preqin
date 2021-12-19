const { HOMEPAGE_URL, PROXY_REFERER } = require('../reqParams/urls/urls');

const scraperObject = {
    url: HOMEPAGE_URL,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

    }
}

module.exports = scraperObject;