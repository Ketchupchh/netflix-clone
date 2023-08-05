'use client'

import { LoadingContentSkeleton } from "@/components/ui/loading-content-skeleton";
import { useEffect, useState } from 'react'
import { getGenreMovies, getGenreShows, getTrendingAll } from "@/components/lib/api/films";
import { FilmList } from "@/components/film/film-list";
import type { Movie } from "@/components/lib/types/movie";
import type { TV } from "@/components/lib/types/tv";
import type { Multi } from "@/components/lib/types/multi";

export default function Home()
{
    const [loading, setLoading] = useState(true);
    const [actionMovieData, setActionMovieData] = useState<Movie[]>([]);
    const [actionTVData, setActionTVData] = useState<TV[]>([]);
    const [allTrending, setAllTrending] = useState<Multi[]>([]);

    const handleLoading = () => setLoading(false);

    useEffect(() => {
        async function fetchMovies()
        {
            setAllTrending(await getTrendingAll());
            setActionMovieData(await getGenreMovies([18]));
            setActionTVData(await getGenreShows([18]));
            handleLoading();
        }
        fetchMovies();
    }, []);

    return(
        <>
            {loading ? (
                <LoadingContentSkeleton />
            ) : (
                <section className="flex flex-col gap-10 w-full overflow-hidden min-h-screen xs:px-14 py-20">
                    <FilmList title="Trending" filmData={allTrending} />

                    <FilmList title="Action Movies" filmData={actionMovieData} />

                    <FilmList title="Action Shows" filmData={actionTVData} />
                </section>
            )}
        </>
    )
}