'use client'

import cn from 'clsx'
import Link from "next/link";
import { MainHeader } from "./main-header";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ChangeEvent } from 'react'

const links = [
    {
        linkName: "Home",
        href: "/home",
        canBeHidden: false
    },
    {
        linkName: "Shows",
        href: "/home/shows",
        canBeHidden: false
    },
    {
        linkName: "Movies",
        href: "/home/movies",
        canBeHidden: false
    },
    {
        linkName: "New & Popular",
        href: "/home/new-and-popular",
        canBeHidden: true
    },
    {
        linkName: "My List",
        href: "/home/list",
        canBeHidden: true
    },
    {
        linkName: "Browse by Languages",
        href: "/home/browse-by-languages",
        canBeHidden: true
    },
];

export function HomeHeader() : JSX.Element
{
    const router = useRouter();
    const path = usePathname();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if(!path.includes('search'))
            setInputValue('');
    }, [path]);

    const handleChange = ({
        target: { value }
    } : ChangeEvent<HTMLInputElement>) =>
    {
        setInputValue(value);
        router.replace(`/home/search?s=${value}`);
    }

    return (
        <MainHeader
            className="absolute top-0 items-center gap-5 z-50 px-10 bg-black"
        >
            {links.map((link, index) => (
                <Link
                    key={index}
                    className={cn(
                        path === link.href && 'font-NetflixSans-b',
                        link.canBeHidden && 'hidden xs:block'
                    )}
                    href={link.href}
                >
                    {link.linkName}
                </Link>
            ))}

            <Link
                className='block xs:hidden'
                href={`/home/search?t=${''}`}
            >
                <CustomIcon iconName='MagnifyingGlassIcon' />
            </Link>
            <div
                className="hidden xs:flex flex-row items-center gap-3 ml-auto border border-white/30 rounded-md p-2"
            >
                <CustomIcon iconName='MagnifyingGlassIcon' />
                <input
                    className="outline-none w-10 xs:w-40 h-5 bg-inherit"
                    type="search"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <Link className='hidden xs:block' href="/home/kids">KIDS</Link>
            <Link className='hidden xs:block' href="/home/dvd">DVD</Link>
            <button className='hidden xs:block'>
                <CustomIcon iconName='BellIcon' />
            </button>
            <button className='hidden xs:block'>
                <NextImage
                    src="/assets/avatars/Netflix-avatar.png"
                    alt="avatar"
                    width={50}
                    height={50}
                />
            </button>
        </MainHeader>
    );
}