const { HOMEPAGE_URL, PROXY_REFERER } = require('./reqParams/urls/urls');

function homePage(axios) {
    return async () => {
        try {
            var config = {
                method: 'get',
                url: 'https://proxy.library.upenn.edu/',
                headers: { 
                  'Connection': 'keep-alive', 
                  'sec-ch-ua': '"Chromium";v="97", " Not;A Brand";v="99"', 
                  'sec-ch-ua-mobile': '?0', 
                  'Upgrade-Insecure-Requests': '1', 
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4691.0 Safari/537.36', 
                  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
                  'Sec-Fetch-Site': 'none', 
                  'Sec-Fetch-Mode': 'navigate', 
                  'Sec-Fetch-User': '?1', 
                  'Sec-Fetch-Dest': 'document', 
                  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
                }
            };
            const res = await axios(config);
            console.log('proxy referer');
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = homePage;