import { getTopScoringIntent, getLocationEntity} from "../../src/luisApiHandler";

describe("Luis API Handler", () => {
    test("get correct top scoring intent of an utterance",async () => {

        const utterance = "what movies are showing now?";
        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("ShowingNow");
    })

    test("get correct top scoring intent of an utterance", async () => {

        const utterance = "when is jurassic world showing in queen st?";
        const actualIntent = await getTopScoringIntent(utterance);

        expect(actualIntent).toEqual("GetMovieInfo");
    })

    test("get location entity of an utterance", async () => {

        const utterance = "when is jurassic world showing in queen st?";
        const actualLocationEntity = await getLocationEntity(utterance);

        expect(actualLocationEntity).toBe("queen street");
    })
});
