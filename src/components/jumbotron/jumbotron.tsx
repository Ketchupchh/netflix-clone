'use client'

import { useState } from "react";
import { InputField } from "../input/input-field";
import { NextImage } from "../ui/next-image";
import { CustomIcon } from "../ui/custom-icon";
import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

export function Jumbotron() : JSX.Element
{
    const { push } = useRouter();
    const [inputValue, setInputValue] = useState('');

    const handleChange = ({
      target: { value }
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setInputValue(value);

    return (
        <section
            className="relative flex flex-col items-center justify-center w-full h-[43.5rem] gap-5"
        >
            <div className="absolute w-full h-full overflow-hidden z-0">
                <NextImage
                    src="/assets/main page/main-page-top.jpg"
                    alt="main-page-banner"
                    layout="fill"
                />

                <div className="bg-gradient-to-b from-black/80 to-transparent w-full h-[50rem] absolute top-0 bottom-0"></div>
                <div className="bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/90 to-90% w-full h-[50rem] absolute top-0 bottom-0"></div>
            </div>

            <p className="text-center text-2xl w-72 xs:w-full xs:text-5xl font-NetflixSans-b mt-24 z-10">Unlimited movies, TV shows, and more</p>
            <p className="xs:text-2xl z-10">Watch anywhere. Cancel anytime.</p>
            <p className="text-center w-80 xs:w-full xs:text-xl z-10">Ready to watch? Enter your email to create or restart your membership.</p>
            
            <div className="flex flex-row gap-3">
                <InputField
                    className="w-40 xs:w-96"
                    label="Email address"
                    inputValue={inputValue}
                    handleChange={handleChange}
                />
                <button
                    className="flex flex-row items-center gap-1 bg-main-accent rounded xs:text-2xl font-NetflixSans-b py-1 px-5 z-10"
                    onClick={() => push('/home')}
                >
                    Get Started
                    <CustomIcon className="w-7 h-7" iconName="ChevronRightIcon" />
                </button>
            </div>
        </section>
    );
}