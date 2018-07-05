import {getShowingNowMovies} from "../../src/eventCinemaApiHandler";

describe("Event Cinema API Handler", () => {
    test("get all the movies showing today", async () => {

        const actualShowingNowMovies = await getShowingNowMovies();
        const expectedShowingMovies = "Movies showing now:\n" +
            "Incredibles 2\n" +
            "Ant-Man and The Wasp\n" +
            "Jurassic World: Fallen Kingdom\n" +
            "Hotel Transylvania 3: A Monster Vacation\n" +
            "Ocean's 8\n" +
            "Show Dogs\n"+
            "Sicario: Day of the Soldado\n" +
            "Adrift\n" +
            "Sanju\n" +
            "Duck Duck Goose\n"+
            "TAG\n" +
            "The Leisure Seeker\n" +
            "Hereditary\n" +
            "Deadpool 2\n" +
            "Solo: A Star Wars Story\n" +
            "Love Live Sunshine - Wonderful Stories\n"+
            "Tea with the Dames\n"+
            "Radff18: Antonio Lopez 1970: Sex, Fashion & Disco\n" +
            "Radff18: Harry Seidler: Modernist\n" +
            "Radff18: Tadao Ando - Samurai Architect\n" +
            "Radff18: Die Neue Nationalgalerie\n" +
            "Radff18: Integral Man\n";

        expect(actualShowingNowMovies).toEqual(expectedShowingMovies);
    })
});
