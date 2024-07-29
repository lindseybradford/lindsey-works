import { cn } from '@src/utils/cn';

type MetaLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export const MetaLabel = ({
  className,
  children,
  ...props
}: MetaLabelProps) => {
  return (
    <h3 className={cn('', className)} {...props}>
      {children}
    </h3>
  );
};
