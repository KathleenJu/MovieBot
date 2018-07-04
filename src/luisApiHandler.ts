require('dotenv').config();
import request from "request";

let querystring = require('querystring');

let endpoint: string =
    "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";

let luisAppId = process.env.LUIS_APP_ID;

let queryParams = {
    "subscription-key": process.env.LUIS_SUBSCRIPTION_KEY,
    "timezoneOffset": "0",
    "verbose": true,
    "staging": true,
    "q": null
};

function getLuisAPI(utterance: string, callback: Function) {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    request.get(luisRequestURI, {}, (err: any, response: request.Response, body: any) => {
        if (err)
            console.log(err);
        else {
            let data = JSON.parse(body);
            callback(null, data);
        }
    });
}

function getIntent(utterance: string) {
    getLuisAPI(utterance, function (err: any, body: any): string {
        if (err) {
            return err;
        }
        else {
            let intent: string = body.topScoringIntent.intent;

            console.log(`Query: ${body.query}`);
            console.log(`Intent: ${intent}`);
            console.log(`Entities: ${body.entities}`);
            return intent;
        }
    });
}

getIntent('what movies are showing now?');
getIntent('when is jurassic world showing in queen st?');
