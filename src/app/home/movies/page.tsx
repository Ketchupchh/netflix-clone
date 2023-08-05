'use client'

import { useEffect, useState } from "react";
import { getGenreMovies, getTrendingMovies } from "@/components/lib/api/films";
import { FilmList } from "@/components/film/film-list";
import { LoadingContentSkeleton } from "@/components/ui/loading-content-skeleton";
import type { Movie } from "@/components/lib/types/movie";

export default function MoviesPage()
{
    const [loading, setLoading] = useState(true);
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [actionMovies, setActionMovies] = useState<Movie[]>([]);
    const [dramaMovies, setDramaMovies] = useState<Movie[]>([]);
    const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
    const [thrillerMovies, setThrillerMovies] = useState<Movie[]>([]);

    const handleLoading = () => setLoading(false);

    useEffect(() => {
        async function fetchMovies()
        {
            setTrendingMovies(await getTrendingMovies());
            setActionMovies(await getGenreMovies([28]));
            setDramaMovies(await getGenreMovies([18]));
            setComedyMovies(await getGenreMovies([35]));
            setThrillerMovies(await getGenreMovies([53]));
            handleLoading();
        }
        fetchMovies();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingContentSkeleton />
            ) : (
                <section className="flex flex-col gap-10 w-full overflow-hidden min-h-screen xs:px-14 py-20">
                    <FilmList title="Trending" filmData={trendingMovies} />

                    <FilmList title="Action" filmData={actionMovies} />

                    <FilmList title="Drama" filmData={dramaMovies} />

                    <FilmList title="Comedy" filmData={comedyMovies} />

                    <FilmList title="Thriller" filmData={thrillerMovies} />
                </section>
            )}
        </>
    );
}