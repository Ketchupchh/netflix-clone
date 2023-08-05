'use client'

import { useState } from "react";
import { HomeAccordian } from "../accordian/home-accordian";
import { InputField } from "../input/input-field";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { HomeSection } from "./home-section";
import type { ChangeEvent } from "react";

export function HomeSections() : JSX.Element
{

    const [inputValue, setInputValue] = useState('');

    const handleChange = ({
      target: { value }
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setInputValue(value);

    return (
        <>
            <HomeSection>
                <div className="flex items-center xl:items-baseline w-full h-full">
                    <div className="flex flex-col gap-5 items-center ml-auto">
                    <p className="font-NetflixSans-b lg:w-full xs:text-left text-3xl xs:text-5xl">Enjoy on your TV</p>
                    <p className="text-center lg:text-left text-xl xs:text-2xl xl:w-[46rem]">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-full">
                    <div
                    className="relative flex items-center mr-auto w-96 h-72 sm:w-[20rem] sm:h-[10rem]
                                md:w-[25rem] md:h-[20rem] xl:w-[48rem] xl:h-[35rem] xs:ml-20 sm:ml-44 md:ml-14 xl:ml-0"
                    >
                    <NextImage
                        className="flex items-center overflow-hidden z-10"
                        imgClassName="z-10"
                        src="/assets/main page/tv.png"
                        alt="tv"
                        layout="fill"
                    >
                        <video
                        className="absolute w-[20rem] h-[20rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem]
                                    xl:w-[30rem] xl:h-[40rem] sm:ml-10 xl:ml-[9rem] -mt-2 xs:-mt-3 md:-mt-2 xl:-mt-20 z-0"
                        src="/assets/main page/video-tv-0819.mp4"
                        autoPlay
                        playsInline
                        muted
                        loop
                        />
                    </NextImage>
                    </div>
                </div>
                </HomeSection>

                <HomeSection>
                <div className="flex items-center justify-center w-full h-full md:pr-10">
                    <div
                    className="relative flex items-center w-96 h-72 sm:w-[43rem] sm:h-[35rem] ml-auto"
                    >
                    <NextImage
                        className="flex items-center overflow-hidden z-10"
                        imgClassName="z-10"
                        src="/assets/main page/device-pile.png"
                        alt="device-pile"
                        layout="fill"
                    >
                        <video
                        className="absolute w-[15rem] h-[15rem] xs:w-[15rem] xs:h-[15rem] sm:w-[30rem] sm:h-[30rem]
                                    -mt-24 ml-[3rem] xs:ml-[4.5rem] sm:-mt-40 sm:ml-24 z-0"
                        src="/assets/main page/video-devices.m4v"
                        autoPlay
                        playsInline
                        muted
                        loop
                        />
                    </NextImage>
                    </div>
                </div>

                <div className="flex items-center xl:items-baseline w-full h-full">
                    <div className="flex flex-col gap-5 items-center mr-auto">
                    <p className="font-NetflixSans-b lg:w-full xs:text-left text-3xl xs:text-5xl">Watch everywhere</p>
                    <p className="text-center lg:text-left text-xl xs:text-2xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>       
                </HomeSection>

                <HomeSection>
                <div className="flex items-center xl:items-baseline w-full h-full">
                    <div className="flex flex-col gap-5 items-center ml-auto">
                    <p className="font-NetflixSans-b lg:w-full xs:text-left text-3xl xs:text-5xl text-center">Create profiles for kids</p>
                    <p className="text-center xl:w-[50rem] lg:text-left text-xl xs:text-2xl">
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-full">
                    <div
                    className="relative flex items-center mr-auto w-96 h-72 sm:w-[30rem] sm:h-[23rem]
                                md:w-[34rem] md:h-[24rem] xl:w-[48rem] xl:h-[35rem] xs:ml-20 md:ml-40"
                    >
                    <NextImage
                        src="/assets/main page/kids.png"
                        alt="tv"
                        layout="fill"
                    />
                    </div>
                </div>
                </HomeSection>
                <HomeSection>
                <div className="flex items-center justify-center w-full h-full md:pr-10">
                    <div
                    className="relative flex items-center w-96 h-72 sm:w-[43rem] sm:h-[35rem] ml-auto"
                    >
                    <NextImage
                        className="flex items-center overflow-hidden z-10"
                        imgClassName="z-10"
                        src="/assets/main page/mobile-0819.jpg"
                        alt="device-pile"
                        layout="fill"
                    >
                        <div
                        className="flex flex-row gap-4 items-center relative sm:w-[25rem] sm:h-[6rem] md:ml-[9rem]
                                    border-neutral-600 bg-main-background rounded-md z-10 py-2 px-3
                                    md:mt-96 border-2 w-[18rem] h-[4rem] ml-[2rem] mt-40 sm:ml-[8rem]"
                        >
                        <div className="relative w-14 h-full">
                            <NextImage
                            src="/assets/main page/boxshot.png"
                            alt="boxshot"
                            layout="fill"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-NetflixSans-b text-sm xs:text-base">Stranger Things</p>
                            <p className="text-sm text-[#0071EB]">Downloading...</p>
                        </div>

                        <div className="relative w-12 h-12 ml-auto">
                            <NextImage
                            src="/assets/main page/download.gif"
                            alt="download-gif"
                            layout="fill"
                            />
                        </div>
                        </div>
                    </NextImage>
                    </div>
                </div>

                <div className="flex items-center xl:items-baseline w-full h-full">
                    <div className="flex flex-col gap-5 items-center mr-auto">
                    <p className="font-NetflixSans-b lg:w-full xs:text-left text-3xl xs:text-5xl text-center">Download your shows to watch offline</p>
                    <p className="text-center lg:text-left text-xl xs:text-2x lg:mr-auto">Only available on ad-free plans.</p>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <div className="flex flex-col w-full items-center gap-10">
                    <p className="font-NetflixSans-b text-center xs:text-left text-4xl xs:text-5xl">Frequently Asked Questions</p>

                    <HomeAccordian />

                    <p className="text-xl">Ready to watch? Enter your email to create or restart your membership.</p>

                    <div className="flex flex-row gap-3 -mt-5">
                    <InputField
                        className="w-40 xs:w-96"
                        label="Email address"
                        inputValue={inputValue}
                        handleChange={handleChange}
                    />
                    <button
                        className="flex flex-row items-center gap-1 bg-main-accent rounded xs:text-2xl font-NetflixSans-b py-1 px-5 z-10"
                    >
                        Get Started
                        <CustomIcon className="w-7 h-7" iconName="ChevronRightIcon" />
                    </button>
                    </div>
                </div>
            </HomeSection>
        </>
    );
}