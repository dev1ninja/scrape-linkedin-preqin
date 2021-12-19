const axios = require('./helpers/axiosHelper');

const proxyPage = require('./proxyPage');
const homePage = require('./homePage');
const refererPage = require('./refererPage');

const browserObject = require('./helpers/browser');
const scraperController = require('./helpers/pageController');

async function mainParser() {
  try {

		// const proxyPageRes = await proxyPage(axios)();

		// const homePageRes = await homePage(axios)();
		// console.log(homePageRes.data)

		// const refererPageRes = await refererPage(axios)();
		// console.log(refererPageRes.data)

		let browserInstance = browserObject.startBrowser();

		scraperController(browserInstance);
		
	} catch (error) {
		console.log(error);
	}
}

module.exports.mainParser = mainParser;