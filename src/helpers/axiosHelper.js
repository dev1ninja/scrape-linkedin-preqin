const axios = require('axios').create();
const tough = require('tough-cookie');


const CookieFileStore = require('tough-cookie-file-store').FileCookieStore;
const cookieJar = new tough.CookieJar(new CookieFileStore('./cookie.json'))

require('axios-cookiejar-support').default(axios);
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;

module.exports = axios