const axios = require('./helpers/axiosHelper');

const proxyPage = require('./proxyPage');
const homePage = require('./homePage');

async function mainParser() {
  try {

		const proxyPageRes = await proxyPage(axios)();

		const homePageRes = await homePage(axios)();
		console.log(homePageRes.data)
		
	} catch (error) {
		console.log(error);
	}
}

module.exports.mainParser = mainParser;