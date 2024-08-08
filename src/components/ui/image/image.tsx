import { useInView } from 'react-intersection-observer';

import { MediaAnimation } from '@src/constants';
import { cn } from '@src/utils/cn';

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
  const { ref, inView } = useInView();
  const useAnimation = animationOnLoad !== MediaAnimation.None;
  const useFadeAnimation = animationOnLoad === MediaAnimation.Fade;

  return (
    <div
      ref={ref}
      className={cn(
        props.className,
        'relative',
        useAnimation && 'transition-opacity duration-500',
        !inView && useFadeAnimation && 'opacity-0',
        inView && useFadeAnimation && 'opacity-1'
      )}
    >
      {inView && (
        <img
          src={props.src}
          height={props.height}
          width={props.width}
          alt={props.alt}
          className={cn(
            props.classNameInner,
            'absolute',
            isRounded && 'rounded-3xl'
          )}
        />
      )}
    </div>
  );
};
