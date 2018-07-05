require('dotenv').config();
import fetch from "node-fetch";

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

async function luisAPICall(luisRequestURI: string){
    let response = await fetch(luisRequestURI);
    return await response.json() ;
}
async function getTopScoringIntent(){
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + 'what movies are showing now';

    return await luisAPICall(luisRequestURI);
}

export {getTopScoringIntent, luisAPICall}
