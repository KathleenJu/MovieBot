// import fetch from "node-fetch";
// import * as Fetch from "node-fetch";

import request from "request-promise";

const requestAPI = async (uri: string) => {
    let response = await request.get(uri);
    console.log(response);
    return JSON.parse(response);
};

export { requestAPI };
