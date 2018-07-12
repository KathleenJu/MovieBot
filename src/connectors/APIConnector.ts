import request from "request-promise";

abstract class APIConnector {
    protected endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    async requestAPI (path: string) {
        let response = await request.get(this.endpoint + path);
        return response;
    };
}

export {APIConnector}