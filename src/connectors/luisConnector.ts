import {APIConnector} from "./APIConnector";
import * as querystring from "querystring";

interface ILuisQueryParams {
    "subscription-key": string,
    timezoneOffset: string,
    verbose: boolean,
    staging?: boolean
    q: null
}

class LuisConnector extends APIConnector {
    private luisAppId: string;
    private luisQueryParams: ILuisQueryParams;


    constructor(endpoint: string, luisAppId: string, luisQueryParams: ILuisQueryParams) {
        super(endpoint);
        this.endpoint = endpoint;
        this.luisAppId = luisAppId;
        this.luisQueryParams = luisQueryParams;
    }

    async analyseUtterance(utterance: string) {
        let luisRequestURI: string = this.luisAppId + '?' + querystring.stringify(this.luisQueryParams) + utterance;

        return await this.requestAPI(luisRequestURI);
    };
}

export {LuisConnector}
