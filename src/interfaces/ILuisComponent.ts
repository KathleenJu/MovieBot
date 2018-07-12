import {IMovieSession} from "./IMovieSession";

export interface ILuisComponent {
    intent: string;
    entities: IMovieSession
}