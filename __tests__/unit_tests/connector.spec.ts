import request from "request-promise";
import {LuisConnector} from "../../src/connectors/luisConnector";
import {ILuisQueryParams} from "../../src/interfaces/ILuisQueryParams";
import {showingNowJSONResponse} from "../../mockData/luisJsonResponse";

describe("API Connector", () => {
    test("Luis API Connector async test", async () => {
        const subscriptionKey: string = "test";
        const queryParams: ILuisQueryParams = {
            "subscription-key": subscriptionKey,
            "timezoneOffset": "0",
            "verbose": true,
            "q": null
        };

        spyOn(request, "get").and.returnValue(Promise.resolve(showingNowJSONResponse));
        const luisConnector = new LuisConnector("default", "default", queryParams);
        const jsonResponse = await luisConnector.analyseUtterance("what movies are showing today?");

        expect(jsonResponse).toBe(showingNowJSONResponse);
    })
});