import { createElement } from 'react';

import { cn } from '@src/utils/cn';

export enum ParagraphSize {
  Base = 'base',
  Small = 'small',
}

type ParagraphProps = {
  size?: ParagraphSize;
  isTranslucent?: boolean;
  isFlush?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  size = ParagraphSize.Base,
  isTranslucent = false,
  isFlush = false,
  className,
  children,
}: ParagraphProps) => {
  const ParagraphStyles = new Map([
    [
      ParagraphSize.Base,
      cn(
        `text-base leading-relaxed`,
        className,
        !isFlush && 'mb-10',
        isTranslucent && 'opacity-70'
      ),
    ],
    [
      ParagraphSize.Small,
      cn(
        `text-sm leading-normal`,
        className,
        !isFlush && 'mb-5',
        isTranslucent && 'opacity-70'
      ),
    ],
  ]);

  return createElement(
    'p',
    {
      className: ParagraphStyles.get(size),
    },
    children
  );
};
