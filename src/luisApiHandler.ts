import {requestAPI} from "./requestHandler";

require('dotenv').config();

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

const getTopScoringIntent = async (utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;


    let jsonResponse = await requestAPI(luisRequestURI);
    let intent = jsonResponse.topScoringIntent.intent;
    return intent;
}

const getLocationEntity = async (utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;


    let jsonResponse = await requestAPI(luisRequestURI);
    let locationEntity = jsonResponse.entities[0].resolution.values[0];
    return locationEntity;
}

export {getTopScoringIntent, getLocationEntity}
