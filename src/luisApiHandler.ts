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

const getLocationEntityValues = async (utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    let jsonResponse = await requestAPI(luisRequestURI);
    let locationEntityValues = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'Location';
    }).map((locationEntities: any) => {
        return locationEntities.resolution.values[0];
    });

    return locationEntityValues;
};

const getMovieNameEntityValues = async (utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    let jsonResponse = await requestAPI(luisRequestURI);
    let movieNameEntityValues = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'MovieName';
    }).map((movieNameEntity: any) => {
        return movieNameEntity.entity;
    });

    return movieNameEntityValues;
};

const getDatetimeEntityValues = async (utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;

    let dt : any = new Date().getFullYear();
    let jsonResponse = await requestAPI(luisRequestURI);
    let datetimeEntityValue = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'builtin.datetimeV2.date';
    }).map((datetimeEntity: any) => {
        let entityValues = datetimeEntity.resolution.values;
        return entityValues[entityValues.length - 1].value;
    });

    return datetimeEntityValue;
};

export {getTopScoringIntent, getLocationEntityValues, getMovieNameEntityValues, getDatetimeEntityValues}
