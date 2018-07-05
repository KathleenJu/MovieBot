import { getTopScoringIntent} from "../../src/luisApiHandler";
import {accessSync} from "fs";

describe("Luis API Handler", () => {
    test("get correct top scoring intent of an utterance",async () => {

        const utterance = "what movies are showing now?";
        const actualIntent = await getTopScoringIntent();

        expect(actualIntent).toEqual("ShowingNow");
    })

    // test("get correct top scoring intent of an utterance", () => {
    //
    //     const utterance = "when is jurassic world showing in queen st?";
    //     const actualIntent = getTopScoringIntentV2(utterance);
    //
    //     expect(actualIntent).toEqual("GetMovieInfo");
    // })

    // test("get location entity of an utterance", () => {
    //
    //     const utterance = "when is jurassic world showing in queen st?";
    //     const actualLocationEntity = getLocationEntity(utterance);
    //
    //     expect(actualLocationEntity).toBe("GetMovieInfo");
    // })
});
