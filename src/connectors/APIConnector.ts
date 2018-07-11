import request from "request-promise";

class APIConnector {
    private uri: string;
    constructor(uri: string){
        this.uri = uri;
    }

    async requestAPI (path: string) {
        let response = await request.get(this.uri + path);
        return JSON.parse(response);
    };

}

export {APIConnector}