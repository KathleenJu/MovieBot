import {APIConnector} from "./APIConnector";

class EventCinemaConnector extends APIConnector{
    constructor(endpoint: string){
        super(endpoint);
    }
    async getMovieApi(path: string) {
        return await this.requestAPI(this.endpoint + path);
    };
}

export {EventCinemaConnector}