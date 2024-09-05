import { useContext } from 'react';

import { ThemeContext } from '@src/context/theme-provider';
import { cn } from '@src/utils/cn';
import { RoundedCorner, ImageProps, Theme } from '@src/constants';

import { Heading, HeadingLevel } from '@src/components/ui/heading';
import { Image } from '@src/components/ui/image';
import { Paragraph } from '@src/components/ui/paragraph';

type QuoteProps = {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  attribution?: string;
  image?: ImageProps;
  role?: string;
};

export const Quote = ({
  children,
  className,
  textClassName,
  attribution,
  image,
  role,
}: QuoteProps) => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;

  return (
    <div className={cn(className, 'lg:flex grow')}>
      <Heading
        level={HeadingLevel.H1}
        className={cn(textClassName, 'hidden lg:block pr-8 -mt-2')}
      >
        "
      </Heading>
      <div className="lg:flex lg:flex-col lg:justify-between grow">
        <Paragraph
          isFlush
          className={cn(
            textClassName,
            'opacity-70 text-lg tracking-wide leading-relaxed'
          )}
        >
          {children}
        </Paragraph>

        <div className="lg:flex justify-between items-center mt-8 lg:mt-14'">
          <div>
            {attribution && (
              <Paragraph isFlush className={textClassName}>
                {attribution}
              </Paragraph>
            )}
            {role && (
              <Paragraph
                isFlush
                className={cn(
                  textClassName,
                  'opacity-70 uppercase font-heading text-sm tracking-wider'
                )}
              >
                {role}
              </Paragraph>
            )}
          </div>

          {image && attribution && (
            <Image
              src={image.src}
              height={image.height}
              width={image.width}
              alt={attribution}
              className="h-12 w-12 lg:mt-0 mt-4"
              classNameInner={cn(!isTechnicolor && 'grayscale')}
              roundedCorner={RoundedCorner.RoundedXl}
            />
          )}
        </div>
      </div>
    </div>
  );
};
