import { cn } from '@src/utils/cn';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  classNameInner?: string;
};
export const Image = ({ src, alt, className, classNameInner }: ImageProps) => {
  return (
    <div className={cn(className, 'relative')}>
      <img src={src} alt={alt} className={cn(classNameInner, 'absolute')} />
    </div>
  );
};
