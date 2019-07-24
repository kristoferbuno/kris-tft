var express = require('express')
var app = express()
var request = require('request');
let riotApiKey = 'RGAPI-8425fb47-a891-4e3e-b926-3a6db81733a3';

app.listen(5050, function(){
    console.log('api.js is running on port '+5050)
})

app.get('/summonersearch', function(req, apiRES) {
    console.log('calling route /summonersearch')

    let summonerName;
    if (req.body) summonerName = req.summonerName;
    summonerName = 'twisted_fate_top';

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
                let tftOBJ = body[1]; //!! may not always be true
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