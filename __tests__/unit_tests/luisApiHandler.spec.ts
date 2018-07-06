import { getTopScoringIntent, getLocationEntityValues , getMovieNameEntityValues, getDateEntityValues} from "../../src/luisApiHandler";

describe("Luis API Handler", () => {
    test("get correct top scoring intent of an utterance",async () => {

        const utterance = "what movies are showing now?";
        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("ShowingNow");
    });

    test("get correct top scoring intent of an utterance", async () => {

        const utterance = "when is jurassic world showing in queen st?";
        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("GetMovieInfo");
    });

    test("get location entity value of an utterance", async () => {

        const utterance = "what time is movie showing on queen st today?";
        const actualLocationEntity = await getLocationEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["queen street"]);
    });

    test("get all location entity values of an utterance", async () => {

        const utterance = "what time is movie showing on queen st and st lukes today?";
        const actualLocationEntity = await getLocationEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["queen street", "st lukes"]);
    });

    test("get movie name value of an utterance", async () => {

        const utterance = "what time is incredibles 2 showing today?";
        const actualLocationEntity = await getMovieNameEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["incredibles 2"]);
    });

    test("get datetime value of a date with no year specified of an utterance", async () => {

        const utterance = "what time is jurassic world showing on st lukes on july 20?";
        const actualLocationEntity = await getDateEntityValues(utterance);

        expect(actualLocationEntity).toEqual( ["2018-07-20"]);
    });

    test("get datetime value of an utterance", async () => {

        const utterance = "what time is jurassic world showing on st lukes on today?";
        const actualLocationEntity = await getDateEntityValues(utterance);
        let dateToday = new Date().toISOString().slice(0, 10)

        expect(actualLocationEntity).toEqual([dateToday]) ;
    });
});
