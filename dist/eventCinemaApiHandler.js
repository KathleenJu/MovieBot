"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var request = require("request");
function getShowingNowMovies() {
    var endpoint = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";
    request(endpoint, function (err, response, body) {
        if (err)
            console.log(err);
        else {
            var data = JSON.parse(body);
            var movie = data.Data.Movies[0].Name;
            console.log("Intent: " + movie);
        }
    });
}
getShowingNowMovies();
