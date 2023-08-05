import type { SyntheticEvent } from 'react';
import type { TV } from './types/tv';
import type { Movie } from './types/movie';
import type { CombinedFilm } from './types/combined-film';

export function preventBubbling(
    callback?: ((...args: never[]) => unknown) | null,
    noPreventDefault?: boolean
) {
    return (e: SyntheticEvent): void => {
      e.stopPropagation();
  
      if (!noPreventDefault) e.preventDefault();
      if (callback) callback();
    };
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function combineFilm(filmData: Movie[] | TV[])
{

    const combinedFilms: CombinedFilm[] = filmData.map((item) => {
        if ("title" in item) {
            // Movie
            const movie = item as Movie;
            return {
                media_type: "movie",
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
                genres: movie.genre_ids,
                release_date: movie.release_date
            };
        } else {
            // TV show
            const tvShow = item as TV;
            return {
                media_type: "tv",
                id: tvShow.id,
                title: tvShow.name,
                overview: tvShow.overview,
                backdrop_path: tvShow.backdrop_path,
                poster_path: tvShow.poster_path,
                genres: tvShow.genre_ids,
                release_date: tvShow.first_air_date
            };
        }
    });

    return combinedFilms;
}