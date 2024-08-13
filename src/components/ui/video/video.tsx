import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { MediaAnimation, RoundedCorner } from '@src/constants';
import { cn } from '@src/utils/cn';

type VideoProps = {
  poster?: string;
  mp4Src?: string;
  webmSrc: string;
  height: string;
  width: string;
  className?: string;
  innerClassName?: string;
  roundedCorner?: RoundedCorner;
  playAsGif?: boolean;
  animationOnLoad?: MediaAnimation;
};

export const Video = ({
  roundedCorner = RoundedCorner.Rounded3xl,
  animationOnLoad = MediaAnimation.Fade,
  ...props
}: VideoProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useAnimation = animationOnLoad !== MediaAnimation.None;
  const useFadeAnimation = animationOnLoad === MediaAnimation.Fade;

  const videoAttributes = {
    ...(props.playAsGif && {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
    }),
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        props.className,
        useAnimation && 'transition-opacity duration-500',
        useFadeAnimation && (inView ? 'opacity-1' : 'opacity-0')
      )}
    >
      <video
        className={cn(
          roundedCorner,
          props.innerClassName,
          'absolute object-cover h-full'
        )}
        height={props.height}
        width={props.width}
        poster={props.poster}
        {...videoAttributes}
      >
        {props.mp4Src && <source src={props.mp4Src} type="video/mp4" />}
        <source src={props.webmSrc} type="video/webm" />
      </video>
    </div>
  );
};
