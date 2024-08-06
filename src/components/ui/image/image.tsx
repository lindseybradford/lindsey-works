import { LazyLoadImage } from 'react-lazy-load-image-component';

import { cn } from '@src/utils/cn';

type ImageProps = {
  src: string;
  height: string;
  width: string;
  alt: string;
  className?: string;
  classNameInner?: string;
};
export const Image = ({
  src,
  height,
  width,
  alt,
  className,
  classNameInner,
}: ImageProps) => {
  return (
    <div className={cn(className, 'relative')}>
      <LazyLoadImage
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={cn(classNameInner, 'absolute')}
      />
    </div>
  );
};
