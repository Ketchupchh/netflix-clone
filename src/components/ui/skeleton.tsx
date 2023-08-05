import cn from 'clsx'

type SkeletonProps = {
    className?: string;
}

export function Skeleton({
    className
} : SkeletonProps) : JSX.Element
{
    return (
        <div className={cn('animate-pulse bg-neutral-500', className ?? 'w-20 h-20 rounded-full')} />
    );
}