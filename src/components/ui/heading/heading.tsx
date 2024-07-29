import { createElement } from 'react';
import { cn } from '@src/utils/cn';

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
  const HeadingStyles = new Map([
    [HeadingLevel.H1, 'text-5xl font-mono max-w-xxl mb-16 leading-tight'],
    [HeadingLevel.H2, 'text-3xl font-mono max-w-xl mb-10'],
  ]);

  return createElement(
    `h${level}`,
    {
      className: cn(HeadingStyles.get(level), className),
    },
    children
  );
};
