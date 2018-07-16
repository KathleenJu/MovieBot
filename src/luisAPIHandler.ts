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

const luisResult = async (question: string) => {
    try {
        let result = await luisConnector.analyseUtterance(question);
        return result;
    }
    catch (err) {
        return "error";
    }
};

let getResponse = (intent : string) => {
    if(intent === "Greeting"){
        return "Hello";
    }else{
        return "some other intent";
    }
};


export {luisResult}


