import cn from 'clsx'
import { NextImage } from '../ui/next-image';
import type { ReactNode } from 'react'

type MainHeaderProps = {
    className?: string;
    disableSticky?: boolean;
    children?: ReactNode;
}

export function MainHeader({
    className,
    disableSticky,
    children
} : MainHeaderProps) : JSX.Element
{
    return (
        <header
            className={cn(
                'flex flex-row gap-3 w-full py-1 z-20',
                className ?? 'xl:px-[11.5rem] px-5 xs:px-10 bg-black',
                !disableSticky && 'sticky top-0'
            )}
        >
            <NextImage
                src="/assets/Netflix_Logo.png"
                alt="netflix-logo"
                width={189}
                height={189}
            />
            {children}
        </header>
    );
}