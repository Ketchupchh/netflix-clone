'use client'

import { multiSearch } from "@/components/lib/api/films";
import { CombinedFilm } from "@/components/lib/types/combined-film";
import { NextImage } from "@/components/ui/next-image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage()
{
    const searchParams = useSearchParams();

    const searchValue = searchParams.get('s');

    const [films, setFilms] = useState<CombinedFilm[]>([]);

    useEffect(() => {
        async function fetchFilms()
        {
            setFilms(await multiSearch(searchValue ?? ''))
        }
        fetchFilms();
    }, [searchValue]);

    return (
        <>
            <div className="grid grid-cols-7 gap-3">
                {films.map((film) => (
                    <Link
                        key={film.id}
                        className="relative w-64 h-40"
                        href={`/watch/${film.id}?t=${film.media_type}`}
                    >
                        <NextImage
                            src={`http://image.tmdb.org/t/p/original/${film.backdrop_path}`}
                            alt={film.title}
                            layout="fill"
                            useSkeleton
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}