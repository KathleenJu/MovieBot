import {APIConnector} from "./APIConnector";

class EventCinemaConnector extends APIConnector{
    constructor(uri: string){
        super(uri);
    }
}

export {EventCinemaConnector}