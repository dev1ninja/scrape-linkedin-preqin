const axios = require('axios').create();
const tough = require('tough-cookie');
const { wrapper } = require('axios-cookiejar-support');

const CookieFileStore = require('tough-cookie-file-store').FileCookieStore;
const cookieJar = new tough.CookieJar(new CookieFileStore('./cookie.json'))

const axios_update = wrapper(axios);
axios_update.defaults.jar = cookieJar;
axios_update.defaults.withCredentials = true;

module.exports = axios_update