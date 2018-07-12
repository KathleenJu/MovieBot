import request from "request-promise";
import {luisResult, movieSession} from "../../src/luisApiHandler";
import {showingNowJSONResponse, jsonResponseWithAllEntityTypes, jsonResponseWithTwoValuesOfSameEntity} from "../../mockData/luisJsonResponse";
import {IMovieSession} from "../../src/interfaces/IMovieSession";

describe("Luis API Handler", () => {
    test("get correct top scoring intent of an utterance", async () => {

        spyOn(request, "get").and.returnValue(Promise.resolve(JSON.stringify(showingNowJSONResponse)));
        const actualIntent = await luisResult();

        expect(actualIntent).toEqual("ShowingNow");
    });



























    // xdescribe("For an utterance with a one movie name, date and location entity value", () => {
    //     const utterance = "when is jurassic world showing in queen st today?";
    //
    //     beforeEach(()=>{
    //         jest.spyOn(request, "get").mockImplementation(() => {
    //             return Promise.resolve(JSON.stringify(jsonResponseWithAllEntityTypes));
    //         });
    //     });
    //
    //     test("get correct top scoring intent of an utterance", async () => {
    //         const actualIntent = await getTopScoringIntent(utterance);
    //
    //         expect(actualIntent).toEqual("GetMovieInfo");
    //     });
    //
    //     xtest("get datetime value of today from an utterance", async () => {
    //         const actualLocationEntity = await getDateEntityValues(utterance);
    //         const dateToday = new Date().toISOString().slice(0, 10);
    //
    //         expect(actualLocationEntity).toEqual([dateToday]);
    //     });
    //
    //     test("get location entity value of an utterance", async () => {
    //         const actualLocationEntity = await getLocationEntityValues(utterance);
    //
    //         expect(actualLocationEntity).toEqual(["queen street"]);
    //     });
    //
    //     test("get movie name value of an utterance", async () => {
    //         const actualLocationEntity = await getMovieNameEntityValues(utterance);
    //
    //         expect(actualLocationEntity).toEqual(["jurassic world"]);
    //     });
    // });
    //
    // describe("For an utterance with more than one location enn", () => {
    //     const utterance = "what time is incredibles 2 showing on queen st and st lukes on july 20?";
    //
    //     beforeEach(()=>{
    //         jest.spyOn(request, "get").mockImplementation(() => {
    //             return Promise.resolve(JSON.stringify(jsonResponseWithTwoValuesOfSameEntity));
    //         });
    //     });
    //
    //     test("get all location entity values of an utterance", async () => {
    //         const actualLocationEntity = await getLocationEntityValues(utterance);
    //
    //         expect(actualLocationEntity).toEqual(["queen street", "st lukes"]);
    //     });
    //
    //     test("get datetime value of a date with no year specified of an utterance", async () => {
    //         const actualLocationEntity = await getDateEntityValues(utterance);
    //
    //         expect(actualLocationEntity).toEqual(["2018-07-20"]);
    //     });
    // });
});
