import fetch from "node-fetch";

const requestAPI = async (uri: string) => {
    let response = await fetch(uri);
    return await response.json();
};

export { requestAPI };
