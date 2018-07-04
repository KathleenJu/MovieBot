import request = require("request");

function getShowingNowMovies() {
    let showingNowURI: string = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";

    request(showingNowURI, (err: any, response: request.Response, body: any) => {
        if (err) {
            console.log(err);
            throw Error("Request Failed");
        }
        else {
            let data = JSON.parse(body);
            let movies = data.Data.Movies;
            let message: string = 'Movies showing now:\n';

            for (let movieName of movies) {
                message += movieName.Name + '\n';
            }
            console.log(message);
            return message;
        }
    })
}

export {getShowingNowMovies}
