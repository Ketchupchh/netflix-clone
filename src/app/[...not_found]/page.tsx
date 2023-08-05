'use client'

import { SEO } from "@/components/common/seo";
import { NextImage } from "@/components/ui/next-image";
import { useRouter } from "next/navigation";

export default function NotFound()
{

    const { push } = useRouter();

    return (
        <div
            className="w-screen min-h-screen"
            style={{
                backgroundImage: "url('/assets/not found/bg-lost-in-space.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <SEO title="Netflix" />
            <header className="flex items-center bg-black w-screen h-[68px]">
                <NextImage className="ml-10" src="/assets/Netflix_Logo.png" alt="logo_v7" width={150} height={150} />
            </header>

            <div className="flex flex-col items-center justify-center text-white w-full mt-40">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-NetflixSans-m text-[6rem]">Lost your way?</p>
                    <p className="font-NetflixSans-r text-[2.2rem] w-[70rem]">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>

                    <button className="font-NetflixSans-m text-black text-[1.6rem] bg-white
                                        hover:bg-white/[.85] rounded pl-[2.5rem] pr-[2.5rem]
                                        p-[0.8rem] w-[15rem] mt-8"
                        onClick={() => {
                            push('/');
                        }}
                    >
                        Netflix Home
                    </button>

                    <p className="font-NetflixSans-r text-[2.4rem] mt-40 border-l-2 border-[#e50914] px-4">
                        Error Code <strong>NSES-404</strong>
                    </p>
                </div>

            </div>
        </div>
    );
}