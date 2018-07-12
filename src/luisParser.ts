class LuisParser {
    jsonResponse: any;
    constructor(jsonResponse: any){
        this.jsonResponse = jsonResponse;
    }

    async getTopScoringIntent() {
        let intent = this.jsonResponse.topScoringIntent.intent;
        return intent;
    };

    async getLocationEntityValues() {
        let locationEntityValues = this.jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'Location';
        }).map((locationEntities: any) => {
            return locationEntities.resolution.values[0];
        });

        return locationEntityValues;
    };

    async getMovieNameEntityValues() {
        let movieNameEntityValues = this.jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'MovieName';
        }).map((movieNameEntity: any) => {
            return movieNameEntity.entity;
        });

        return movieNameEntityValues;
    };

    async getDateEntityValues() {
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