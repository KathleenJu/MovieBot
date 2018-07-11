import {requestAPI} from "./connectors/requestHandler";

const showingNowMoviesAPI = async () => {

    let showingNowURI: string = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";

    let jsonResponse = await requestAPI(showingNowURI);
    return jsonResponse;
};

export {showingNowMoviesAPI}
