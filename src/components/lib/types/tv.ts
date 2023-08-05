import { GenreName } from "./combined-film";

export type TV = {
    id: number;
    adult: false;
    backdrop_path: string;
    poster_path: string;
    original_name: string;
    name: string;
    original_language: string;
    overview: string;
    first_air_date: string;
    origin_country: {

    }[];
    popularity: number;
    vote_count: number;
    vote_average: number;
    genre_ids: GenreName[]
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
        vote_average: number;
    }[];
};

export type TVShows = TV[];