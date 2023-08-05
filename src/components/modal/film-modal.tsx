'use client'

import Link from "next/link";
import { CombinedFilm, filmGenres } from "../lib/types/combined-film";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { useEffect, useState } from "react";
import { getMovieCredits, getMovieKeywords, getMovieRecommendations, getShowCredits, getShowKeywords, getShowRecommendations } from "../lib/api/films";
import { combineFilm } from "../lib/utils";
import { Skeleton } from "../ui/skeleton";
import type { Credits, Keyword } from '../lib/api/films'

type FilmModalProps = {
    data: CombinedFilm;
}

export function FilmModal({ data } : FilmModalProps) : JSX.Element
{
    const [recommendations, setRecommendations] = useState<CombinedFilm[]>([]);
    const [keywords, setKeywords] = useState<Keyword[]>([]);
    const [credits, setCredits] = useState<Credits[]>([]);

    const { id, media_type, backdrop_path, title, overview, genres, release_date } = data;

    const [recsLoading, setRecsLoading] = useState(true);
    
    const handleLoading = () => setRecsLoading(false);

    useEffect(() => {

        async function fetchRecommendations(id: number, type: "movie" | "tv")
        {

            if(type === "movie")
            {
                setRecommendations(combineFilm(await getMovieRecommendations(id)));
                setKeywords(await getMovieKeywords(id));
                setCredits(await getMovieCredits(id));
            }
            else
            {
                setRecommendations(combineFilm(await getShowRecommendations(id)));
                setKeywords(await getShowKeywords(id));
                setCredits(await getShowCredits(id));
            }
        }
        fetchRecommendations(id, media_type);
        handleLoading();
    }, [id, media_type]);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="relative w-full h-[30rem]">
                <NextImage
                    imgClassName="z-0"
                    src={`http://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={title}
                    layout="fill"
                    useSkeleton
                />
                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-start gap-3 px-10 z-10">
                    <p className="text-shadow text-4xl font-NetflixSans-m shadow-black">{title}</p>

                    <div className="flex flex-row items-center gap-3">
                        <Link
                            className="flex flex-row bg-white py-2 text-black drop-shadow-[0_1px_5px_rgba(0,0,0,0.50)] rounded-md
                                        gap-3 px-10 items-center justify-center"
                            href={`/watch/${id}?t=${media_type}`}
                        >
                            <CustomIcon className="w-6 h-6 -ml-5" iconName='PlayIcon' />
                            <span>Play</span>
                        </Link>
                        <button
                            className='w-10 h-10 ring-1 ring-white rounded-full bg-black/40'
                            disabled
                        >
                            <CustomIcon className='w-10 h-10' iconName='PlusIcon' />
                        </button>
                        <button
                            className='flex items-center justify-center w-10 h-10 ring-1 ring-white rounded-full ml-1
                                        bg-black/40'
                            disabled
                        >
                            <CustomIcon className='w-7 h-7' iconName='HandThumbUpIcon' solid={false} />
                        </button>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-neutral-800 to-90% w-full h-40 absolute top-0 bottom-0 mt-80"></div>
            </div>

            <div className="flex flex-col px-10 py-5 gap-10">
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-5 w-[60%]">
                        <p>{release_date}</p>

                        <p className="text-sm">
                            {keywords?.map((keyword, index) => (
                                <>
                                    <span key={keyword.id} className="text-white">{(index ? ', ' : '') + keyword.name}</span>
                                </>
                            ))}
                        </p>

                        <p>{overview}</p>
                    </div>

                    <div className="flex flex-col gap-3 w-64 ml-auto text-neutral-500">
                        <p>
                            Cast: {' '}
                            {credits?.map((credit, index) => (
                                <>
                                    {index < 5 && (
                                        <span key={credit.id} className="text-white">{(index ? ', ' : '') + credit.name}</span>
                                    )}
                                </>
                            ))}
                        </p>
                        <p>
                            Genres: {' '}
                            {genres?.map((genre, index) => (
                                <>
                                    <span key={genre} className="text-white">{(index ? ', ' : '') + filmGenres[genre]}</span>
                                </>
                            ))}
                        </p>
                        <p>
                            This {media_type === "tv" ? 'show ' : 'movie'} is: {' '}
                            {keywords?.map((keyword, index) => (
                                <>
                                    {index < 3 && (
                                        <span key={keyword.id} className="text-white">{(index ? ', ' : '') + keyword.name}</span>
                                    )}
                                </>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 h-[50rem] overflow-y-auto">
                    <p className="col-span-3 text-2xl font-NetflixSans-m">More Like This</p>
                    {recsLoading ? (
                        <Skeleton className="w-40 h-40" />
                    ) : (
                        <>
                            {recommendations.map((rec) => (
                                <Link
                                    key={rec.id}
                                    className="flex flex-col bg-neutral-600"
                                    href={`/watch/${rec.id}?t=${rec.media_type}`}
                                >
                                    <div className="relative w-full h-32">
                                        <NextImage
                                            src={`http://image.tmdb.org/t/p/original/${rec.backdrop_path}`}
                                            alt={rec.title}
                                            layout="fill"
                                            useSkeleton
                                        />
                                        <p
                                            className="absolute bottom-1 left-0 right-0 text-shadow shadow-black
                                                        font-NetflixSans-m px-3 z-20"
                                        >
                                            {rec.title}
                                        </p>
                                    </div>
                                    <div className="flex flex-col p-3 h-64 gap-3">
                                        <div className="flex flex-row">
                                            <button
                                                className='w-8 h-8 ring-1 ring-white rounded-full bg-black/40'
                                                disabled
                                            >
                                                <CustomIcon className='w-8 h-8' iconName='PlusIcon' />
                                            </button>
                                        </div>
                                        <p className="text-sm break-words line-clamp-[9]">{rec.overview}</p>
                                    </div>
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}