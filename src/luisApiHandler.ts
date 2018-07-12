import {LuisConnector} from "./connectors/luisConnector";
import {LuisParser} from "./luisParser";
import {ILuisQueryParams} from "./interfaces/ILuisQueryParams"

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

const foo = async () => {
    let luisResult = await luisConnector.analyseUtterance("When is incredibles 2 showing today at queen st?");
    let parser = new LuisParser(luisResult);
    let intent = parser.getTopScoringIntent();
    return intent;
};

export {foo}


