require('dotenv').config();
import request = require("request");

function getShowingNowMovies(){
    let endpoint: string =
        "https://www.eventcinemas.co.nz/Movies/GetNowShowing";

    request(endpoint, (err: any,response: request.Response, body: any) => {
        if (err)
            console.log(err);
        else {
            let data = JSON.parse(body);
            let movie: string = data.Data.Movies[0].Name;

            console.log(`Intent: ${movie}`);
        }
        });
}

getShowingNowMovies();
