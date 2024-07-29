import { createElement } from 'react';
import { cn } from '@src/utils/cn';

type MetaLabelProps = {
  tagName: `h3` | `h4` | `h5` | `h6` | `p`;
  className?: string;
  children: React.ReactNode;
};

export const MetaLabel = ({ tagName, className, children }: MetaLabelProps) => {
  return createElement(
    tagName,
    {
      className: cn('flex items-center m-0 text-xs mt-2', className),
    },
    createElement('div', { className: `h-2 w-2 mr-2 bg-[--group-color]` }),
    children
  );
};
