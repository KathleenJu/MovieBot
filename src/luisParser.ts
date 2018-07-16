class LuisParser {
    jsonResponse: any;
    constructor(jsonResponse: any){
        this.jsonResponse = jsonResponse;
    }

    getTopScoringIntent() {
        let intent = this.jsonResponse.topScoringIntent.intent;
        return intent;
    };

    //check if location, movieName, or date are null
    getLocationEntityValues() {
        let locationEntityValues = this.jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'Location';
        }).map((locationEntities: any) => {
            return locationEntities.resolution.values[0];
        });

        return locationEntityValues;
    };

    getMovieNameEntityValues() {
        let movieNameEntityValues = this.jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'MovieName';
        }).map((movieNameEntity: any) => {
            return movieNameEntity.entity;
        });

        return movieNameEntityValues;
    };

    getDateEntityValues() {
        let datetimeEntityValue = this.jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'builtin.datetimeV2.date';
        }).map((datetimeEntity: any) => {
            let entityValues = datetimeEntity.resolution.values;
            return entityValues[entityValues.length - 1].value;
        });

        return datetimeEntityValue;
    };
}
export {LuisParser};