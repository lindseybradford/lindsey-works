import { useEffect, useRef, useState } from 'react';

import { MediaAnimation } from '@src/constants';
import { cn } from '@src/utils/cn';

type VideoProps = {
  mp4Src: string;
  webmSrc: string;
  height: string;
  width: string;
  className?: string;
  isRounded?: boolean;
  playAsGif?: boolean;
  animationOnLoad?: MediaAnimation;
};

export const Video = ({
  isRounded = true,
  animationOnLoad = MediaAnimation.Fade,
  ...props
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    videoRef.current!.onloadeddata = () => {
      videoRef.current!.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
        setIsLoaded(true);
    };
  });

  return (
    <video
      className={cn(
        props.className,
        'relative',
        isRounded && 'rounded-3xl',
        useAnimation && 'transition-opacity duration-500',
        !isLoaded && useFadeAnimation && 'opacity-0',
        isLoaded && useFadeAnimation && 'opacity-1'
      )}
      ref={videoRef}
      height={props.height}
      width={props.width}
      {...videoAttributes}
    >
      <source src={props.mp4Src} type="video/webm" />
      <source src={props.webmSrc} type="video/mp4" />
    </video>
  );
};
