'use client'

import Image from 'next/image';
import cn from 'clsx';
import { useState } from 'react';
import type { ReactNode } from 'react';
import type { ImageProps } from 'next/image';

type NextImageProps = {
  alt: string;
  width?: string | number;
  children?: ReactNode;
  useSkeleton?: boolean;
  imgClassName?: string;
  previewCount?: number;
  blurClassName?: string;
} & ImageProps;

/**
 *
 * @description Must set width and height, if not add layout='fill'
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export function NextImage({
  src,
  alt,
  width,
  height,
  children,
  className,
  useSkeleton,
  imgClassName,
  previewCount,
  blurClassName,
  ...rest
} : NextImageProps): JSX.Element {
  const [loading, setLoading] = useState(!!useSkeleton);

  const handleLoad = (): void => setLoading(false);

  return (
    <figure style={{ width }} className={className}>
      <Image
        className={cn(
          imgClassName,
          loading
            ? blurClassName ??
                'animate-pulse bg-neutral-600'
            : previewCount === 1
            ? '!h-auto !w-auto rounded-lg object-cover'
            : 'object-cover'
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={handleLoad}
        layout='responsive'
        {...rest}
      />
      {children}
    </figure>
  );
}