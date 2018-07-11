import request from "request-promise";

const requestAPI = async (uri: string) => {
    let response = await request.get(uri);
    return JSON.parse(response);
};

export { requestAPI };
