import {LuisConnector} from "./connectors/luisConnector";

export {LuisParser};

class LuisParser {
    async getTopScoringIntent(utterance: string) {
        let jsonResponse = await this.analyseUtterance(utterance);
        let intent = jsonResponse.topScoringIntent.intent;
        return intent;
    };

    async getLocationEntityValues(utterance: string) {
        let jsonResponse = await this.analyseUtterance(utterance);

        let locationEntityValues = jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'Location';
        }).map((locationEntities: any) => {
            return locationEntities.resolution.values[0];
        });

        return locationEntityValues;
    };

    async getMovieNameEntityValues(utterance: string) {
        let jsonResponse = await this.analyseUtterance(utterance);

        let movieNameEntityValues = jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'MovieName';
        }).map((movieNameEntity: any) => {
            return movieNameEntity.entity;
        });

        return movieNameEntityValues;
    };

    async getDateEntityValues(utterance: string) {
        let jsonResponse = await this.analyseUtterance(utterance);

        let datetimeEntityValue = jsonResponse.entities.filter((entities: any) => {
            return entities.type === 'builtin.datetimeV2.date';
        }).map((datetimeEntity: any) => {
            let entityValues = datetimeEntity.resolution.values;
            return entityValues[entityValues.length - 1].value;
        });

        return datetimeEntityValue;
    };
}