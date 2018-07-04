import {getShowingNowMovies} from "../../src/eventCinemaApiHandler";

describe("Showing Now Movies", () => {
    test("get all the movies showing today", () => {

        const showingNowMovies = getShowingNowMovies();
    expect(showingNowMovies).toBe("Incredibles 2");
    })
});
