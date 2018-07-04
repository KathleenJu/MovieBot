"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
function getShowingNowMovies() {
    var showingNowURI = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";
    request(showingNowURI, function (err, response, body) {
        if (err) {
            console.log(err);
            throw Error("Request Failed");
        }
        else {
            var data = JSON.parse(body);
            var movies = data.Data.Movies;
            var message = 'Movies showing now:\n';
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var movieName = movies_1[_i];
                message += movieName.Name + '\n';
            }
            console.log(message);
            return message;
        }
    });
}
exports.getShowingNowMovies = getShowingNowMovies;
