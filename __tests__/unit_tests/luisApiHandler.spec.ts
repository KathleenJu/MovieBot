import {
    getTopScoringIntent,
    getLocationEntityValues,
    getMovieNameEntityValues,
    getDateEntityValues
} from "../../src/luisApiHandler";
import request from "request-promise";


describe("Luis API Handler", () => {

    test("get correct top scoring intent of an utterance", async () => {
        const utterance = "what movies are showing now?";
        const jsonResponse = {
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
        };

        spyOn(request, "get").and.returnValue(Promise.resolve(JSON.stringify(jsonResponse)));

        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("ShowingNow");
    });

    describe("For an utterance with a one movie name, date and location entity value", () => {
        const utterance = "when is jurassic world showing in queen st today?";

        beforeEach(()=>{

            const jsonResponse = {
                "query": "when is jurassic world showing in queen st today?",
                "topScoringIntent": {
                    "intent": "GetMovieInfo",
                    "score": 0.99999994
                },
                "intents": [
                    {
                        "intent": "GetMovieInfo",
                        "score": 0.99999994
                    },
                    {
                        "intent": "ShowingNow",
                        "score": 0.00000156565409
                    },
                    {
                        "intent": "None",
                        "score": 9.025633e-7
                    },
                    {
                        "intent": "Greeting",
                        "score": 1e-9
                    }
                ],
                "entities": [
                    {
                        "entity": "today",
                        "type": "builtin.datetimeV2.date",
                        "startIndex": 43,
                        "endIndex": 47,
                        "resolution": {
                            "values": [
                                {
                                    "timex": "2018-07-10",
                                    "type": "date",
                                    "value": "2018-07-10"
                                }
                            ]
                        }
                    },
                    {
                        "entity": "queen st",
                        "type": "Location",
                        "startIndex": 34,
                        "endIndex": 41,
                        "resolution": {
                            "values": [
                                "queen street"
                            ]
                        }
                    },
                    {
                        "entity": "jurassic world",
                        "type": "MovieName",
                        "startIndex": 8,
                        "endIndex": 21,
                        "role": ""
                    }
                ]
            };
            jest.spyOn(request, "get").mockImplementation(() => {
                return Promise.resolve(JSON.stringify(jsonResponse));
            });
        });

        test("get correct top scoring intent of an utterance", async () => {
            const actualIntent = await getTopScoringIntent(utterance);

            expect(actualIntent).toEqual("GetMovieInfo");
        });

        xtest("get datetime value of today from an utterance", async () => {
            const actualLocationEntity = await getDateEntityValues(utterance);
            const dateToday = new Date().toISOString().slice(0, 10);

            expect(actualLocationEntity).toEqual([dateToday]);
        });

        test("get location entity value of an utterance", async () => {
            const actualLocationEntity = await getLocationEntityValues(utterance);

            expect(actualLocationEntity).toEqual(["queen street"]);
        });

        test("get movie name value of an utterance", async () => {
            const actualLocationEntity = await getMovieNameEntityValues(utterance);

            expect(actualLocationEntity).toEqual(["jurassic world"]);
        });
    });

    describe("For an utterance with more than one location enn", () => {
        const utterance = "what time is incredibles 2 showing on queen st and st lukes on july 20?";

        beforeEach(()=>{
            const jsonResponse = {
                "query": "what time is incredibles 2 showing on queen st and st lukes on july 20?",
                "topScoringIntent": {
                    "intent": "GetMovieInfo",
                    "score": 0.9996405
                },
                "intents": [
                    {
                        "intent": "GetMovieInfo",
                        "score": 0.9996405
                    },
                    {
                        "intent": "None",
                        "score": 0.00756353932
                    },
                    {
                        "intent": "ShowingNow",
                        "score": 0.00000156565409
                    },
                    {
                        "intent": "Greeting",
                        "score": 1e-9
                    }
                ],
                "entities": [
                    {
                        "entity": "july 20",
                        "type": "builtin.datetimeV2.date",
                        "startIndex": 63,
                        "endIndex": 69,
                        "resolution": {
                            "values": [
                                {
                                    "timex": "XXXX-07-20",
                                    "type": "date",
                                    "value": "2017-07-20"
                                },
                                {
                                    "timex": "XXXX-07-20",
                                    "type": "date",
                                    "value": "2018-07-20"
                                }
                            ]
                        }
                    },
                    {
                        "entity": "queen st",
                        "type": "Location",
                        "startIndex": 38,
                        "endIndex": 45,
                        "resolution": {
                            "values": [
                                "queen street"
                            ]
                        },
                        "role": ""
                    },
                    {
                        "entity": "st lukes",
                        "type": "Location",
                        "startIndex": 51,
                        "endIndex": 58,
                        "resolution": {
                            "values": [
                                "st lukes"
                            ]
                        }
                    },
                    {
                        "entity": "incredibles 2",
                        "type": "MovieName",
                        "startIndex": 13,
                        "endIndex": 25,
                        "role": ""
                    }
                ]
            };
            jest.spyOn(request, "get").mockImplementation(() => {
                return Promise.resolve(JSON.stringify(jsonResponse));
            });
        });

        test("get all location entity values of an utterance", async () => {
            const actualLocationEntity = await getLocationEntityValues(utterance);

            expect(actualLocationEntity).toEqual(["queen street", "st lukes"]);
        });

        test("get datetime value of a date with no year specified of an utterance", async () => {
            const actualLocationEntity = await getDateEntityValues(utterance);

            expect(actualLocationEntity).toEqual(["2018-07-20"]);
        });
    });
});
