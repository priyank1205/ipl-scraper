const axios = require('axios');
const cheerio = require('cheerio');

var crawler = axios({
    url: 'https://www.espncricinfo.com/series/ipl-2021-1249214/match-results',
    method: 'get',
    responseType: 'document'
})
.then((response) => {
    let $ = cheerio.load(response.data);
    var links = [];
    let linkSelector = 'div.match-cta-container > a:nth-child(3)';
    $(linkSelector).each((index, element) => {
        const link =  $(element).attr('href');
        links.push(link);
    });
    return links
});

module.exports = crawler;