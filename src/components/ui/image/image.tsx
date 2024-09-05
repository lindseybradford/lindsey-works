import { useInView } from 'react-intersection-observer';

import { ImageProps, MediaAnimation, RoundedCorner } from '@src/constants';
import { cn } from '@src/utils/cn';

export const Image = ({
  roundedCorner = RoundedCorner.Rounded3xl,
  animationOnLoad = MediaAnimation.Fade,
  ...props
}: ImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const useAnimation = animationOnLoad !== MediaAnimation.None;
  const useFadeAnimation = animationOnLoad === MediaAnimation.Fade;

  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        props.className,
        useAnimation && 'transition-opacity duration-500',
        !inView && useFadeAnimation ? 'opacity-0' : 'opacity-1'
      )}
    >
      {inView && (
        <img
          src={props.src}
          height={props.height}
          width={props.width}
          alt={props.alt}
          className={cn(
            roundedCorner,
            props.classNameInner,
            'absolute  object-cover'
          )}
        />
      )}
    </div>
  );
};
