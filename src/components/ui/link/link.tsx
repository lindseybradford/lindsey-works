import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import { cn } from '@src/utils/cn';
import { ContentSectionLayout } from '@src/constants';

type LinkProps = RouterLinkProps & {
  useButtonStyle?: boolean;
};

export const Link = ({
  className,
  useButtonStyle,
  children,
  ...props
}: LinkProps) => {
  const { button } = ContentSectionLayout();

  return (
    <RouterLink
      className={cn(className, useButtonStyle && button())}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
