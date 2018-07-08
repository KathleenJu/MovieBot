import {requestAPI} from "./requestHandler";
import querystring from 'querystring';

let endpoint: string =
    "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";

let luisAppId: string = process.env.LUIS_APP_ID || "default";

interface ILuisQueryParams {
    "subscription-key": string,
    timezoneOffset: string,
    verbose: boolean,
    staging?: boolean
    q: null
}

let subscriptionKey: string = process.env.LUIS_SUBSCRIPTION_KEY || "default";

let queryParams: ILuisQueryParams = {
    "subscription-key": subscriptionKey,
    timezoneOffset: "0",
    verbose: true,
    q: null
};

const analyseUtterance = async(utterance: string) => {
    let luisRequestURI: string =
        endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;


    return await requestAPI(luisRequestURI);
};

const getTopScoringIntent = async (utterance: string) => {
    let jsonResponse = await analyseUtterance(utterance);
    let intent = jsonResponse.topScoringIntent.intent;
    return intent;
};

const getLocationEntityValues = async (utterance: string) => {
    let jsonResponse = await analyseUtterance(utterance);

    let locationEntityValues = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'Location';
    }).map((locationEntities: any) => {
        return locationEntities.resolution.values[0];
    });

    return locationEntityValues;
};

const getMovieNameEntityValues = async (utterance: string) => {
    let jsonResponse = await analyseUtterance(utterance);

    let movieNameEntityValues = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'MovieName';
    }).map((movieNameEntity: any) => {
        return movieNameEntity.entity;
    });

    return movieNameEntityValues;
};

const getDateEntityValues = async (utterance: string) => {
    let jsonResponse = await analyseUtterance(utterance);

    let datetimeEntityValue = jsonResponse.entities.filter( (entities: any) => {
        return entities.type === 'builtin.datetimeV2.date';
    }).map((datetimeEntity: any) => {
        let entityValues = datetimeEntity.resolution.values;
        return entityValues[entityValues.length - 1].value;
    });

    return datetimeEntityValue;
};

export {getTopScoringIntent, getLocationEntityValues, getMovieNameEntityValues, getDateEntityValues}
