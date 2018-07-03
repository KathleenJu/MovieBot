require('dotenv').config();
import request from "request";

let querystring = require('querystring');

let endpoint: string =
    "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";

let luisAppId = process.env.LUIS_APP_ID;

let queryParams = {
    "subscription-key": process.env.LUIS_SUBSCRIPTION_KEY,
    "timezoneOffset": "0",
    "verbose":  true,
    "staging": true,
    "q": null
};

function getIntent(utterance: string ): void{
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    request.get(luisRequestURI, {},(err: any,response: request.Response, body: any) => {
            if (err)
                console.log(err);
            else {
                let data = JSON.parse(body);
                let intent: string = data.topScoringIntent.intent;

                console.log(`Query: ${data.query}`);
                console.log(`Intent: ${intent}`);
            }
        });
}

function getEntity() {
    
}
getIntent('what movies are showing now?');
getIntent('when is jurassic world showing in queen st?');
