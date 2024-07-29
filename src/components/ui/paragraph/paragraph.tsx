import { cn } from '@src/utils/cn';

type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  className,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <p className={cn('', className)} {...props}>
      {children}
    </p>
  );
};
