import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { MediaAnimation, RoundedCorner } from '@src/constants';
import { cn } from '@src/utils/cn';

type VideoProps = {
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
    if (inView) {
      videoRef.current!.onloadeddata = () => {
        videoRef.current!.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
          setIsLoaded(true);
      };
    }
  });

  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        props.className,
        useAnimation && 'transition-opacity duration-500',
        !isLoaded && useFadeAnimation && 'opacity-0',
        isLoaded && inView && useFadeAnimation && 'opacity-1'
      )}
    >
      {inView && (
        <video
          className={cn(
            roundedCorner,
            props.innerClassName,
            'absolute object-cover h-full'
          )}
          ref={videoRef}
          height={props.height}
          width={props.width}
          {...videoAttributes}
        >
          {props.mp4Src && <source src={props.mp4Src} type="video/webm" />}
          <source src={props.webmSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
