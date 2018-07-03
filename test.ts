require('dotenv').config();

let request = require('request');
let querystring = require('querystring');

function getLuisIntent(utterance: string) {
    let endpoint: string =
        "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";

    let luisAppId = process.env.LUIS_APP_ID;

    let queryParams = {
        "subscription-key": process.env.LUIS_SUBSCRIPTION_KEY,
        "timezoneOffset": "0",
        "verbose":  true,
        "staging": true,
        "q": utterance
    }

    let luisRequest: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams);

    request(luisRequest,
        function (err: string,
                  response: string, body: string) {
            if (err)
                console.log(err);
            else {
                let data = JSON.parse(body);

                console.log(`Query: ${data.query}`);
                console.log(`Top Intent: ${data.topScoringIntent.intent}`);
                console.log('Intents:');
                console.log(data.intents);
            }
        });
}

getLuisIntent('what movies are showing now?');
