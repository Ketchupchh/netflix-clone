import type { ReactNode } from 'react'

type HomeSectionProps ={
    children: ReactNode;
}

export function HomeSection({ children } : HomeSectionProps) : JSX.Element
{
    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-around py-20 xl:px-[13rem]
                        bg-main-backgroud border-b-[7px] border-neutral-800 w-full
                        relative min-h-[20rem] px-10 lg:px-[2rem]"
        >
            {children}
        </div>
    );
}