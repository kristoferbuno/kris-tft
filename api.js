var express = require('express')
var app = express()
var request = require('request');
let riotApiKey = 'RGAPI-91b7bb54-4082-4e6c-98a0-99f9775af99a';

app.listen(5050, function(){
    console.log('api.js is running on port '+5050)
})

app.post('/user', function(req, apiRES) {
    console.log('calling route /user')

    let summonerName;
    summonerName = '';
    if (req.query) summonerName = req.query.summonerName;

    request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotApiKey}`,
    { json: true },
    (err, res, body) => {
        if (err) console.error(err);
        else {
            let eID = body.id;
            request(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${eID}?api_key=${riotApiKey}`,
            { json: true },
            (err, res, body) => {
                if (err) console.error(err);
                let tftIndex = -1;
                body.forEach((rankedSet, index) => {
                    if (rankedSet.queueType == "RANKED_TFT") tftIndex = index;
                })
                let tftOBJ = body[tftIndex]; //!! may not always be true
                let returnJSON = {};
                returnJSON['tier'] = tftOBJ.tier;
                returnJSON['rank'] = tftOBJ.rank;
                returnJSON['name'] = tftOBJ.summonerName;
                returnJSON['lp'] = tftOBJ.leaguePoints;
                returnJSON['wins'] = tftOBJ.wins;
                returnJSON['losses'] = tftOBJ.losses;

                apiRES.json(returnJSON);
            })}
    })
    
})