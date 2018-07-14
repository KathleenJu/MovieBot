import {LuisConnector} from "./connectors/luisConnector";
import {LuisParser} from "./luisParser";
import {ILuisQueryParams} from "./interfaces/ILuisQueryParams"
import {IMovieSession} from "./interfaces/IMovieSession";

let endpoint: string = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";
let luisAppId: string = process.env.LUIS_APP_ID || "default";
let subscriptionKey: string = process.env.LUIS_SUBSCRIPTION_KEY || "default";
let queryParams: ILuisQueryParams = {
    "subscription-key": subscriptionKey,
    "timezoneOffset": "0",
    "verbose": true,
    "q": null
};
let luisConnector = new LuisConnector(endpoint, luisAppId, queryParams);

const luisResult = async () => {
    try {
        let result = await luisConnector.analyseUtterance("When is incredibles 2 showing today at queen st?");
        return result;
    }
    catch (err) {
        return "error";
    }
};

let result = luisResult();
let parser = new LuisParser(result);
let intent = parser.getTopScoringIntent();

let getResponse = (intent : string) => {
    if(intent === "Greeting"){
        return "Hello";
    }else{
        return "some other intent";
    }
};

// let movieName = parser.getMovieNameEntityValues();
// let location = parser.getLocationEntityValues();
// let date = parser.getDateEntityValues();
//
// const movieSession = async () => {
//     let luisResult: IMovieSession = {MovieName: await movieName, Cinema: await location, Date: await date};
//     return luisResult;
// };

export {luisResult}


