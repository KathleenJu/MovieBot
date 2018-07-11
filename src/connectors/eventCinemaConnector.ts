import {APIConnector} from "./APIConnector";

class EventCinemaConnector extends APIConnector{
    constructor(endpoint: string){
        super(endpoint);
    }
}

export {EventCinemaConnector}