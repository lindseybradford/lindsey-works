import { cn } from '@src/utils/cn';
import { GridLayout } from '@src/constants';
import { Link } from '@src/components/ui/link';

type CTAWellProps = {
  children: React.ReactNode;
  className?: string;
  btnText: string;
  btnUrl: string;
};

export const CTAWell = ({
  children,
  className,
  btnText,
  btnUrl,
}: CTAWellProps) => {
  const { parentGrid, halfColumn } = GridLayout.slots;

  return (
    <div
      className={cn(parentGrid, 'rounded-xl bg-white/10 p-8 max-w-5xl mx-auto')}
    >
      <div className={cn(halfColumn)}>{children}</div>
      <div className={cn(halfColumn, 'lg:flex justify-end items-center')}>
        <Link to={btnUrl} useButtonStyle className="">
          {btnText}
        </Link>
      </div>
    </div>
  );
};
