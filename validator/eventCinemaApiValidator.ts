import validate from "validate.js";
// import {showingNowMoviesAPI} from "../src/eventCinemaApiHandler";
import {jsonMovies} from "../eventCinemaApiResult";
//receives api from event cinema


const constraints = {
    "Success": {
        presence: true
    },
    "Data": {
        presence: true
    },
    "Data.Movies": {
        presence: true,
    }
};
const movieConstraints = {
    "Id": {
        presence: true
    },
    "Name": {
        presence: true
    },
    "RunningTime": {
        presence: true
    },
    "FirstSession": {
        presence: true
    },
    "LastSession": {
        presence: true
    }
};


const validateEventCinemaAPI = () => {
    let errors = validate(jsonMovies, constraints);
    console.log(validate(jsonMovies, constraints));
    return errors;

};


const validateMovies = () => {
    let errors = jsonMovies.Data.Movies.map((movie) => {
        return validate(movie, movieConstraints)
    });
    console.log(errors
    );
    return errors;
};

// const validationResult = () => {
//     let parentResult = validateEventCinemaAPI();
//     let childResult = validateMovies();
//     if (validateEventCinemaAPI() || validateMovies()) {
//         parentResult = parentResult || {};
//         parentResult.Movies = childResult;
//         console.log(parentResult);
//         return parentResult;
//     }
// };
//
// validationResult();


export {validateEventCinemaAPI, validateMovies}

