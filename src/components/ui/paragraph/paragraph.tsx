import { createElement } from 'react';

import { cn } from '@src/utils/cn';

export enum ParagraphVariant {
  Base = 'base',
  Small = 'small',
  Large = 'large',
}

type ParagraphProps = {
  variant?: ParagraphVariant;
  isFlush?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  variant = ParagraphVariant.Base,
  isFlush = false,
  className,
  children,
}: ParagraphProps) => {
  const ParagraphStyles = new Map([
    [ParagraphVariant.Base, `text-base leading-relaxed ${!isFlush && 'mb-10'}`],
  ]);

  return createElement(
    'p',
    {
      className: cn(ParagraphStyles.get(variant), className),
    },
    children
  );
};
