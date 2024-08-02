import { createElement } from 'react';

import { cn } from '@src/utils/cn';
import { Layout } from '@src/constants';

type MetaLabelProps = {
  tagName: `h3` | `h4` | `h5` | `h6` | `p`;
  className?: string;
  hasDingbat?: boolean;
  children: React.ReactNode;
};

export const MetaLabel = ({
  tagName,
  className,
  hasDingbat = true,
  children,
}: MetaLabelProps) => {
  const { textTransition } = Layout();
  return createElement(
    tagName,
    {
      className: cn(
        'flex items-center m-0 text-xs mt-2 leading-4',
        textTransition(),
        className
      ),
    },
    hasDingbat &&
      createElement('div', {
        className: cn(`h-2 w-2 mr-2 bg-[--group-color]`, textTransition()),
      }),
    children
  );
};
