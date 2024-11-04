import { createElement } from 'react';

import { cn } from '@src/utils/cn';
import { ContentSectionLayout } from '@src/constants';

export enum HeadingLevel {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}
type HeadingProps = {
  level: HeadingLevel;
  isFlush?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({
  level,
  isFlush = false,
  className,
  children,
}: HeadingProps) => {
  const { textTransition } = ContentSectionLayout();
  const HeadingBaseStyles = ['font-bold font-heading', textTransition()];
  const HeadingStyles = new Map([
    [
      HeadingLevel.H1,
      cn(
        `lg:text-8xl md:text-6xl text-5xl max-w-xxl leading-2 tracking-tight`,
        !isFlush && 'mb-16',
        HeadingBaseStyles,
        className
      ),
    ],
    [
      HeadingLevel.H2,
      cn(
        `text-3xl max-w-xl`,
        !isFlush && 'mb-10',
        HeadingBaseStyles,
        className
      ),
    ],
  ]);

  return createElement(
    `h${level}`,
    {
      className: HeadingStyles.get(level),
    },
    children
  );
};
