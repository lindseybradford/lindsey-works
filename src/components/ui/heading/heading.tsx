import { createElement } from 'react';

import { cn } from '@src/utils/cn';
import { Layout } from '@src/constants';

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
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({ level, className, children }: HeadingProps) => {
  const { textTransition } = Layout();
  const HeadingBaseStyles = ['font-bold font-heading', textTransition()];
  const HeadingStyles = new Map([
    [
      HeadingLevel.H1,
      cn(
        `text-8xl max-w-xxl mb-16 leading-2 tracking-tight`,
        HeadingBaseStyles,
        className
      ),
    ],
    [
      HeadingLevel.H2,
      cn(`text-3xl max-w-xl mb-10`, HeadingBaseStyles, className),
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
