var express = require('express')
var app = express()
var cors = require('cors');
var request = require('request');
let riotApiKey = 'RGAPI-b5461d5b-0dac-47b5-80fa-f09d4d5b8eaa';

app.listen(5050, function(){
    console.log('api.js is running on port '+5050)
})

app.use(cors({origin: 'http://localhost:4200'}));

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