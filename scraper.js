const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

axios({
    url: '1254058',
    baseURL: 'https://www.espncricinfo.com/series/1249214/game/',
    method: 'get',
    responseType: 'document'
})
.then((response) => {
    let og_link = response.request.path;

    og_link = og_link.replace('live-cricket-score', 'full-scorecard');
    // let $ = cheerio.load(response.data);

    // fs.writeFile(__dirname + '/test.htm', response.data, (err) => {
    //     if (err) throw err;
    //     console.log('Done sir!');
    // });

    // $('tbody > tr > td').each((index, element) => {
    //     console.log($(element).text());
    // });

    // let og_link = $('a').attr('href');
    let optns = {
        url:'',
        baseURL: 'https://www.espncricinfo.com',
        method: 'get',
        responseType: 'document'
    }
    optns.url = og_link;
    axios(optns)
    .then((res) => {
        const firstInningBatting = [];
        const secondInningBatting = [];
        const firstInningBowling = [];
        const secondInningBowling = [];
        let $ = cheerio.load(res.data);
        let firstBattingTable = '#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.match-scorecard-page > div:nth-child(1) > div.Collapsible > div > div > div > table.table.batsman > tbody > tr';
        $(firstBattingTable).each((index, element) => {
            const tds = $(element).find('td');
            const name = $(tds[0]).text();
            if(name){
                const outInfo = $(tds[1]).text();
                const runs = $(tds[2]).text();
                const ballsFaced = $(tds[3]).text();
                const fours = $(tds[5]).text();
                const sixes = $(tds[6]).text();
                const strikeRate = $(tds[7]).text();
                const tableRow = {
                    'Name': name,
                    'Out Info': outInfo,
                    'Runs': runs,
                    'Balls Faced': ballsFaced,
                    'Fours': fours,
                    'Sixes': sixes,
                    'Strike Rate': strikeRate
                }
                firstInningBatting.push(tableRow);
            }
        });
        
        let secondBattingTable = '#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.match-scorecard-page > div:nth-child(2) > div.Collapsible > div > div > div > table.table.batsman > tbody > tr';
        $(secondBattingTable).each((index, element) => {
            const tds = $(element).find('td');
            const name = $(tds[0]).text();
            if(name){
                const outInfo = $(tds[1]).text();
                const runs = $(tds[2]).text();
                const ballsFaced = $(tds[3]).text();
                const fours = $(tds[5]).text();
                const sixes = $(tds[6]).text();
                const strikeRate = $(tds[7]).text();
                const tableRow = {
                    'Name': name,
                    'Out Info': outInfo,
                    'Runs': runs,
                    'Balls Faced': ballsFaced,
                    'Fours': fours,
                    'Sixes': sixes,
                    'Strike Rate': strikeRate
                }
                secondInningBatting.push(tableRow);
            }
        });

        let firstBowlingTable = '#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.match-scorecard-page > div:nth-child(1) > div.Collapsible > div > div > div > table.table.bowler > tbody > tr';
        $(firstBowlingTable).each((index, element) => {
            const tds = $(element).find('td');
            const name = $(tds[0]).text();
            if(name){
                const overs = $(tds[1]).text();
                const maidens = $(tds[2]).text();
                const runsGiven = $(tds[3]).text();
                const wickets = $(tds[4]).text();
                const economy = $(tds[5]).text();
                const dotsBowled = $(tds[6]).text();
                const foursGiven = $(tds[7]).text();
                const sixesGiven = $(tds[8]).text();
                const wides = $(tds[9]).text();
                const noBalls = $(tds[10]).text();
                const tableRow = {
                    'Name': name,
                    'Overs Bowled': overs,
                    'Maidens': maidens,
                    'Runs Given': runsGiven,
                    'Wickets Taken': wickets,
                    'Economy': economy,
                    'Dots Bowled': dotsBowled,
                    'Fours Given': foursGiven,
                    'Sixes Given': sixesGiven,
                    'Wides': wides,
                    'No Balls': noBalls,
                }
                firstInningBowling.push(tableRow);
            }
        });

        let secondBowlingTable = '#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.match-scorecard-page > div:nth-child(2) > div.Collapsible > div > div > div > table.table.bowler > tbody > tr';
        $(secondBowlingTable).each((index, element) => {
            const tds = $(element).find('td');
            const name = $(tds[0]).text();
            if(name){
                const overs = $(tds[1]).text();
                const maidens = $(tds[2]).text();
                const runsGiven = $(tds[3]).text();
                const wickets = $(tds[4]).text();
                const economy = $(tds[5]).text();
                const dotsBowled = $(tds[6]).text();
                const foursGiven = $(tds[7]).text();
                const sixesGiven = $(tds[8]).text();
                const wides = $(tds[9]).text();
                const noBalls = $(tds[10]).text();
                const tableRow = {
                    'Name': name,
                    'Overs Bowled': overs,
                    'Maidens': maidens,
                    'Runs Given': runsGiven,
                    'Wickets Taken': wickets,
                    'Economy': economy,
                    'Dots Bowled': dotsBowled,
                    'Fours Given': foursGiven,
                    'Sixes Given': sixesGiven,
                    'Wides': wides,
                    'No Balls': noBalls,
                }
                secondInningBowling.push(tableRow);
            }
        });

        console.log(secondInningBowling);

    });
});