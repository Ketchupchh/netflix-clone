'use client'

import 'swiper/scss';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { NextImage } from '../ui/next-image';
import { CustomIcon } from '../ui/custom-icon';
import { Modal } from '../modal/modal';
import { useModal } from '../lib/hooks/useModal';
import { FilmModal } from '../modal/film-modal';
import { useState } from 'react';
import { combineFilm } from '../lib/utils';
import { useWindow } from '../lib/context/window-context';
import { useRouter } from 'next/navigation';
import type { Movie } from '../lib/types/movie'
import type { TV } from '../lib/types/tv'
import type { Multi } from '../lib/types/multi';
import type { CombinedFilm } from '../lib/types/combined-film';

type FilmListProps = {
    title: string;
    filmData: Movie[] | TV[] | Multi[];
}

export function FilmList({ filmData, title } : FilmListProps) : JSX.Element
{
    const combinedFilms: CombinedFilm[] = combineFilm(filmData);

    const { push } = useRouter();
    const { isMobile } = useWindow();
    const { open, openModal, closeModal} = useModal();
    const [filmModal, setFilmModal] = useState<CombinedFilm>(combinedFilms[0]);

    const handleClick = (film: CombinedFilm) => {
        setFilmModal(film);
        openModal();
    }

    return (
        <section className='w-[90%]'>
            <p className='font-NetflixSans-m text-3xl mb-3'>{title}</p>

            <Modal
                className='flex justify-center items-center w-full h-full'
                modalClassName='w-[60rem] h-[120rem] bg-neutral-800 rounded-xl overflow-hidden xl:mt-[65rem]
                                lg:mt-[85rem] md:mt-[95rem] sm:mt-[100rem] xs:mt-[105rem]'
                open={open}
                closeModal={closeModal}
            >
                <FilmModal data={filmModal} />
            </Modal>

            <Swiper
                className='!overflow-visible z-0 hover:z-10'
                slidesPerView={isMobile ? 2 : 6}
                spaceBetween={isMobile ? 5 : -10}
            >
                {combinedFilms.map((film, index) =>(
                    <SwiperSlide
                        key={index}
                    >
                        <motion.button
                            className='group relative w-52 h-32 xs:w-64 xs:h-40 shadow-lg shadow-black z-0'
                            initial={{
                                visibility: 'hidden'
                            }}
                            animate={{
                                visibility: 'hidden'
                            }}
                            whileHover={{
                                scale: isMobile ? 1 : 1.5,
                                zIndex: 50
                            }}
                            whileInView={{
                                visibility: 'visible'
                            }}
                            onClick={() => isMobile ? push(`/watch/${film.id}?t=${film.media_type}`) : handleClick(film)}
                        >
                            <div className='relative w-48 h-32 xs:w-64 xs:h-40'>
                                <NextImage
                                    imgClassName='group-hover:z-50 z-0'
                                    src={`http://image.tmdb.org/t/p/original/${film.backdrop_path}`}
                                    alt={film.title}
                                    layout='fill'
                                    useSkeleton
                                />
                            </div>
                            <motion.div
                                className='h-20 bg-neutral-800 invisible [transition:visibility_400ms_ease_0ms,opacity_400ms_ease_0ms]
                                            group-hover:visible group-hover:opacity-100 group-hover:delay-50 opacity-0 z-50
                                            shadow-xl shadow-black/50 xs:flex flex-col items-center p-2 hidden'
                            >
                                <div className='flex flex-row items-center w-full'>
                                    <Link href={`/watch/${film.id}?t=${film.media_type}`}>
                                        <CustomIcon className='w-8 h-8' iconName='PlayCircleIcon' />
                                    </Link>
                                    <button
                                        className='w-7 h-7 ring-1 ring-white rounded-full'
                                        disabled
                                    >
                                        <CustomIcon className='w-7 h-7' iconName='PlusIcon' />
                                    </button>
                                    <button
                                        className='flex items-center justify-center w-7 h-7 ring-1 ring-white rounded-full ml-1'
                                        disabled
                                    >
                                        <CustomIcon className='w-5 h-5' iconName='HandThumbUpIcon' solid={false} />
                                    </button>
                                    <button className='flex justify-center items-center w-7 h-7 ml-auto ring-1 ring-white rounded-full'>
                                        <CustomIcon iconName='ChevronDownIcon' />
                                    </button>
                                </div>
                            </motion.div>
                        </motion.button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}