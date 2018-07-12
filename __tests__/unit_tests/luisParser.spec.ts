import {
    showingNowJSONResponse,
    jsonResponseWithAllEntityTypes,
    jsonResponseWithTwoValuesOfSameEntity
} from "../../mockData/luisJsonResponse";
import {LuisParser} from "../../src/luisParser";

describe("Luis API Handler", () => {
    test("get correct top scoring intent of an utterance", async () => {
        const parser = new LuisParser(showingNowJSONResponse);
        const intent = await parser.getTopScoringIntent();

        expect(intent).toBe("ShowingNow");
    });

    const parser = new LuisParser(jsonResponseWithAllEntityTypes);
    test("get correct top scoring intent of an utterance", async () => {
        const intent = await parser.getTopScoringIntent();

        expect(intent).toEqual("GetMovieInfo");
    });

    test("get datetime value of today from an utterance", async () => {
        const dateEntity = await parser.getDateEntityValues();
        const isValidDate = Date.parse(dateEntity);

        expect(isValidDate).toBeTruthy();
    });

    test("get location entity value of an utterance", async () => {
        const locationEntity = await parser.getLocationEntityValues();

        expect(locationEntity).toEqual(["queen street"]);
    });

    test("get movie name value of an utterance", async () => {
        const movieNameEntity = await parser.getMovieNameEntityValues();

        expect(movieNameEntity).toEqual(["jurassic world"]);
    });

    test("get all location entity values of an utterance", async () => {
        const parser = new LuisParser(jsonResponseWithTwoValuesOfSameEntity);
        const actualLocationEntity = await parser.getLocationEntityValues();

        expect(actualLocationEntity).toEqual(["queen street", "st lukes"]);
    });

    test("get datetime value of a date with no year specified of an utterance", async () => {
        const parser = new LuisParser(jsonResponseWithTwoValuesOfSameEntity);
        const actualLocationEntity = await parser.getDateEntityValues();

        expect(actualLocationEntity).toEqual(["2018-07-20"]);
    });

});
