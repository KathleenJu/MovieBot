"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var request_1 = __importDefault(require("request"));
var querystring = require('querystring');
var endpoint = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";
var luisAppId = process.env.LUIS_APP_ID;
var queryParams = {
    "subscription-key": process.env.LUIS_SUBSCRIPTION_KEY,
    "timezoneOffset": "0",
    "verbose": true,
    "staging": true,
    "q": null
};
function getLuisAPI(utterance, callback) {
    var luisRequestURI = endpoint + luisAppId +
        '?' + querystring.stringify(queryParams) + utterance;
    request_1.default.get(luisRequestURI, {}, function (err, response, body) {
        if (err)
            console.log(err);
        else {
            var data = JSON.parse(body);
            callback(null, data);
        }
    });
}
function getIntent(utterance) {
    getLuisAPI(utterance, function (err, body) {
        if (err) {
            return err;
        }
        else {
            var intent = body.topScoringIntent.intent;
            console.log("Query: " + body.query);
            console.log("Intent: " + intent);
            console.log("Entities: " + body.entities);
            return intent;
        }
    });
}
getIntent('what movies are showing now?');
getIntent('when is jurassic world showing in queen st?');
