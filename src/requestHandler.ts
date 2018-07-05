import fetch from "node-fetch";

async function requestAPI(uri: string) {
    let response = await fetch(uri);
    return await response.json();
}

export {requestAPI};

