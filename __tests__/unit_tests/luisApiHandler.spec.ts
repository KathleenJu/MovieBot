import { getTopScoringIntent, getLocationEntityValues , getMovieNameEntityValues, getDateEntityValues} from "../../src/luisApiHandler";
import request from "request-promise";


describe("Luis API Handler", () => {

    test("get correct top scoring intent of an utterance",async () => {

        const utterance = "what movies are showing now?";
        const jsonResponse = Promise.resolve(JSON.stringify({
            "query": "what movies are showing now",
            "topScoringIntent": {
                "intent": "ShowingNow",
                "score": 0.8263232
            },
            "intents": [
                {
                    "intent": "ShowingNow",
                    "score": 0.8263232
                },
                {
                    "intent": "None",
                    "score": 0.137616515
                },
                {
                    "intent": "GetMovieInfo",
                    "score": 0.0104203029
                },
                {
                    "intent": "Greeting",
                    "score": 0.0039842627
                }
            ],
            "entities": [
                {
                    "entity": "now",
                    "type": "builtin.datetimeV2.datetime",
                    "startIndex": 24,
                    "endIndex": 26,
                    "resolution": {
                        "values": [
                            {
                                "timex": "PRESENT_REF",
                                "type": "datetime",
                                "value": "2018-07-10 08:55:15"
                            }
                        ]
                    }
                }
            ]
        }));
        spyOn(request, "get").and.returnValue(jsonResponse);

        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("ShowingNow");
    });

    xtest("get correct top scoring intent of an utterance", async () => {

        const utterance = "when is jurassic world showing in queen st?";
        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("GetMovieInfo");
    });

    xtest("get location entity value of an utterance", async () => {

        const utterance = "what time is movie showing on queen st today?";
        const actualLocationEntity = await getLocationEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["queen street"]);
    });

    xtest("get all location entity values of an utterance", async () => {

        const utterance = "what time is movie showing on queen st and st lukes today?";
        const actualLocationEntity = await getLocationEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["queen street", "st lukes"]);
    });

    xtest("get movie name value of an utterance", async () => {

        const utterance = "what time is incredibles 2 showing today?";
        const actualLocationEntity = await getMovieNameEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["incredibles 2"]);
    });

    xtest("get datetime value of a date with no year specified of an utterance", async () => {

        const utterance = "what time is jurassic world showing on st lukes on july 20?";
        const actualLocationEntity = await getDateEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["2018-07-20"]);
    });

    xtest("get datetime value of an utterance", async () => {

        const utterance = "what time is jurassic world showing on st lukes on today?";
        const actualLocationEntity = await getDateEntityValues(utterance);
        const dateToday = new Date().toISOString().slice(0, 10);

        expect(actualLocationEntity).toEqual([dateToday]) ;
    });
});
