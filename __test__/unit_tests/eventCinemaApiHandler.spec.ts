import {getShowingNowMovies} from "../../src/eventCinemaApiHandler";

describe("Showing Now Movies", () => {
    test("get all the movies showing today", () => {

        const actualShowingNowMovies = getShowingNowMovies();
        const expectedShowingMovies = "Movies showing now:\n" +
            "Incredibles 2\n" +
            "Ant-Man and The Wasp\n" +
            "Jurassic World: Fallen Kingdom\n" +
            "Ocean's 8\n" +
            "Sicario: Day of the Soldado\n" +
            "Adrift\n" +
            "Sanju\n" +
            "TAG\n" +
            "The Leisure Seeker\n" +
            "Duck Duck Goose\n" +
            "Hereditary\n" +
            "Deadpool 2\n" +
            "Solo: A Star Wars Story\n" +
            "The Heart of Man\n" +
            "Tea with the Dames\n" +
            "Lobster Cop 龙虾刑警\n" +
            "Radff18: Antonio Lopez 1970: Sex, Fashion & Disco\n" +
            "Radff18: Harry Seidler: Modernist\n" +
            "Radff18: Tadao Ando - Samurai Architect\n" +
            "Radff18: Die Neue Nationalgalerie\n" +
            "Radff18: Integral Man";

    expect(actualShowingNowMovies).toBe("Incredibles 2");
    })
});
