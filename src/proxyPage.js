const { PROXY_URL } = require('./reqParams/urls/urls');

function proxyPage(axios) {
    return async () => {
        try {
            var config = {
                method: 'get',
                url: PROXY_URL,
                headers: { 
                  'Connection': 'keep-alive', 
                  'Cache-Control': 'max-age=0', 
                  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"', 
                  'sec-ch-ua-mobile': '?0', 
                  'Upgrade-Insecure-Requests': '1', 
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36', 
                  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
                  'Sec-Fetch-Site': 'none', 
                  'Sec-Fetch-Mode': 'navigate', 
                  'Sec-Fetch-User': '?1', 
                  'Sec-Fetch-Dest': 'document', 
                  'Accept-Language': 'en-US,en;q=0.9', 
                }
            };

            const res = await axios(config);
            console.log('proxy page');
            return res;

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = proxyPage;