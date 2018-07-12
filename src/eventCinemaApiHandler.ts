const foo = (intent: string, cinemaId: Int8Array, date: Date ) => {
    let path = "";
    if (intent === "ShowingNow"){
        path = "/Movies/GetShowingNow"
    }
    else if (intent === "GetMovieInfo") {
        // path = "/Cinemas/GetSessions?cinemaIds=" + cinemaId;
        path = "/Cinemas/GetSessions?cinemaIds=" + cinemaId + "&date=" + date;
    }
};
