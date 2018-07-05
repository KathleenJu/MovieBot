import {requestAPI} from "./requestHandler";

const getShowingNowMovies = async () => {

    let showingNowURI: string = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";

    let jsonResponse = await requestAPI(showingNowURI);
    let jsonMovies = await jsonResponse.Data.Movies;
    let moviesResult: string = 'Movies showing now:\n';

    for (let movieName of jsonMovies) {
        moviesResult += movieName.Name + '\n';
    }
    return moviesResult;
};

export {getShowingNowMovies}
