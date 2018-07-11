import {requestAPI} from "./requestHandler";

interface ILuisQueryParams {
    "subscription-key": string,
    timezoneOffset: string,
    verbose: boolean,
    staging?: boolean
    q: null
}

class LuisConnector{
    endpoint: string;
    luisAppId: string;
    luisQueryParams: ILuisQueryParams;
    utterance : string;

    constructor(endpoint: string,  luisAppId: string,  luisQueryParams: ILuisQueryParams, utterance: string){
        this.endpoint = endpoint;
        this.luisAppId = luisAppId;
        this.luisQueryParams = luisQueryParams;
        this.utterance = utterance;
    }
}
// let subscriptionKey: string = process.env.LUIS_SUBSCRIPTION_KEY || "default";
// let queryParams: ILuisQueryParams = {
//     "subscription-key": subscriptionKey,
//     timezoneOffset: "0",
//     verbose: true,
//     q: null
// };
// const foo = new LuisConnector();
// const analyseUtterance = async(utterance: string) => {
//     let luisRequestURI: string =
//         endpoint + luisAppId +
//         '?' + querystring.stringify(queryParams) + utterance;
//
//     return await requestAPI(luisRequestURI);
// };