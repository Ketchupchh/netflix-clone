'use client'

import { useEffect, useState } from "react";
import { getGenreShows, getTrendingShows } from "@/components/lib/api/films";
import { FilmList } from "@/components/film/film-list";
import { LoadingContentSkeleton } from "@/components/ui/loading-content-skeleton";
import type { TV } from "@/components/lib/types/tv";

export default function ShowsPage()
{
    const [loading, setLoading] = useState(true);
    const [trendingShows, setTrendingShows] = useState<TV[]>([]);
    const [actionShows, setActionShows] = useState<TV[]>([]);
    const [dramaShows, setDramaShows] = useState<TV[]>([]);
    const [comedyShows, setComedyShows] = useState<TV[]>([]);
    const [thrillerShows, setThrillerShows] = useState<TV[]>([]);

    const handleLoading = () => setLoading(false);

    useEffect(() => {
        async function fetchMovies()
        {
            setTrendingShows(await getTrendingShows());
            setActionShows(await getGenreShows([10759]));
            setDramaShows(await getGenreShows([18]));
            setComedyShows(await getGenreShows([35]));
            setThrillerShows(await getGenreShows([9648]));
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
                    <FilmList title="Action & Adventure" filmData={trendingShows} />

                    <FilmList title="Action" filmData={actionShows} />

                    <FilmList title="Drama" filmData={dramaShows} />

                    <FilmList title="Comedy" filmData={comedyShows} />

                    <FilmList title="Mystery" filmData={thrillerShows} />
                </section>
            )}
        </>
    );
}