import { GenreName } from "./combined-film";

export type Multi = {
  media_type: string;

  id: number;
  imdb_id: string;
  adult: boolean;
  video: boolean;
  original_title: string;
  title: string;
  original_language: string;
  spoken_languages:{
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
  tagline: string;
  overview: string;
  homepage: string;
  backdrop_path: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  genre_ids: GenreName[];
  popularity: number;
  vote_count: number;
  vote_average: number;

  //TV
  name: string;
};
    
export type Multis = Multi[];