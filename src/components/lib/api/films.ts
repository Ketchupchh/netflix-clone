import { CombinedFilm } from "../types/combined-film";
import { combineFilm } from "../utils";
import type { Episode } from "../types/episode";
import type { Movie, Movies } from "../types/movie";
import type { TV, TVShows } from "../types/tv";
import type { Multis } from "../types/multi";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER}`
  }
};

export type Keyword = {
  id: number;
  name: string;
}

export type Credits = {
  adult: boolean;
  gender: number,
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export async function getPopularMovies(): Promise<Movies> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=en-US&page=1`);
  const data = (await res.json()).result as Movies;
  return data;
}

export async function getTrendingMovies(): Promise<Movies> {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=en-US&page=1`);
  const data = (await res.json()).results as Movies;
  return data;
}

export async function getTrendingShows(): Promise<TVShows> {
  const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
  const data = (await res.json()).results as TVShows;
  return data;
}

export async function getTrendingAll(): Promise<Multis> {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
  const data = (await res.json()).results as Multis;
  return data;
}

export async function getGenreMovies(genre: number[]): Promise<Movies> {

  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`, options);
  const data = (await res.json()).results as Movies;
  return data;
}

export async function getGenreShows(genre: number[]): Promise<TVShows> {
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}&with_origin_country=US`, options);
  const data = (await res.json()).results as TVShows;
  return data;
}

export async function getMovieRecommendations(id: number): Promise<Movies> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options);
  const data = (await res.json()).results as Movies;
  return data;
}

export async function getShowRecommendations(id: number): Promise<TVShows> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`, options);
  const data = (await res.json()).results as TVShows;
  return data;
}

export async function getMovieData(id: string): Promise<Movie> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=en-US`);
  const data = (await res.json()) as Movie;
  return data;
}

export async function getShowData(id: string): Promise<TV> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=en-US`);
  const data = (await res.json()) as TV;
  return data;
}

export async function getEpisodeData(id: string, season: number, episode: number): Promise<Episode> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}`, options);
  const data = (await res.json()) as Episode;
  return data;
}

export async function multiSearch(name: string): Promise<CombinedFilm[]> {
  const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US`, options);
  const data = (await res.json()).results as Multis;

  return combineFilm(data);
}

export async function getMovieKeywords(id: number): Promise<Keyword[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords`, options);
  const data = (await res.json()).keywords as Keyword[];

  return data;
}

export async function getShowKeywords(id: number): Promise<Keyword[]> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/keywords`, options);
  const data = (await res.json()).results as Keyword[];

  return data;
}

export async function getMovieCredits(id: number): Promise<Credits[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
  const data = (await res.json()).cast as Credits[];

  return data;
}

export async function getShowCredits(id: number): Promise<Credits[]> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`, options);
  const data = (await res.json()).cast as Credits[];

  return data;
}