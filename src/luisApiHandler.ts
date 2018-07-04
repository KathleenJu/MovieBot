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
    "q": null
};

function getLuisAPI(utterance: string, callback: Function) {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    request.get(luisRequestURI, {}, (err: any, response: request.Response, body: any) => {
        if (err) {
            console.log(err);
        }
        else {
            let data = JSON.parse(body);
            callback(null, data);
        }
    });
}

function getTopScoringIntent(utterance: string) {
    var test;
    getLuisAPI(utterance, function (err: any, body: any): string {
        if (err || body.statusCode == 401 || body.statusCode == 400) {
            console.log("Request is denied, check your connectoin or subscription key.");
            test = "failed";
            return err;
        }
        else {
            let intent: string = body.topScoringIntent.intent;
            test = intent;
            console.log(`Query: ${body.query}`);
            console.log(`Intent: ${intent}`);
            return intent;
        }
    });
    return test;
}

getTopScoringIntent('what movies are showing now?');
getTopScoringIntent('what time is incredibles 2 showing on queen street');
export {getTopScoringIntent}
