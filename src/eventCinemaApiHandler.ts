import request from "request";

function getEventCinemasApi(callback: Function) {
    let showingNowURI: string = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";

    request.get(showingNowURI, {}, (err: any, response: request.Response, body: any) => {
        if (err)
            console.log(err);
        else {
            let data = JSON.parse(body);
            callback(null, data);
        }
    });
}

function getShowingNowMovies() {
    getEventCinemasApi(function (err: any, body: any): string {
        if (err) {
            return err;
        }
        else {
            let movies = body.Data.Movies;
            let message: string = 'Movies showing now:\n';

            for (let movieName of movies) {
                message += movieName.Name + '\n';
            }
            console.log(message);
            return message;
        }
    });
}

getShowingNowMovies();
export {getShowingNowMovies, getEventCinemasApi}
