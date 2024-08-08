import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { MediaAnimation } from '@src/constants';
import { cn } from '@src/utils/cn';

import './image.css';

type ImageProps = {
  src: string;
  height: string;
  width: string;
  alt: string;
  className?: string;
  classNameInner?: string;
  isRounded?: boolean;
  animationOnLoad?: MediaAnimation;
};

export const Image = ({
  isRounded = true,
  animationOnLoad = MediaAnimation.Fade,
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const useAnimation = animationOnLoad !== MediaAnimation.None;
  const useFadeAnimation = animationOnLoad === MediaAnimation.Fade;

  return (
    <div className={cn(props.className, 'relative')}>
      <LazyLoadImage
        src={props.src}
        height={props.height}
        width={props.width}
        alt={props.alt}
        className={cn(
          props.classNameInner,
          'absolute',
          isRounded && 'rounded-3xl',
          useAnimation && 'transition-opacity duration-500',
          !isLoaded && useFadeAnimation && 'opacity-0',
          isLoaded && useFadeAnimation && 'opacity-1'
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
