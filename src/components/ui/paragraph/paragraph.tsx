import { createElement } from 'react';

import { cn } from '@src/utils/cn';
import { ContentSectionLayout } from '@src/constants';

export enum ParagraphSize {
  Base = 'base',
  XSmall = 'small',
}

type ParagraphProps = {
  size?: ParagraphSize;
  isFlush?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  size = ParagraphSize.Base,
  isFlush = false,
  className,
  children,
}: ParagraphProps) => {
  const { textTransition } = ContentSectionLayout();
  const ParagraphBaseStyles = [textTransition(), 'font-body'];
  const ParagraphStyles = new Map([
    [
      ParagraphSize.Base,
      cn(
        `text-base leading-5`,
        !isFlush && 'mb-10',
        className,
        ParagraphBaseStyles
      ),
    ],
    [
      ParagraphSize.XSmall,
      cn(
        `text-xs leading-4`,
        !isFlush && 'mb-5',
        className,
        ParagraphBaseStyles
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
