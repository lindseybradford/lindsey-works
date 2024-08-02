import { cn } from '@src/utils/cn';
import { Layout } from '@src/constants';

const { container, sectionSideMargins } = Layout();

type ContentSectionProps = {
  className?: string;
  mainContent: React.ReactNode;
  asideContent: React.ReactNode;
};

export const ContentSection = ({
  className,
  mainContent,
  asideContent,
  ...props
}: ContentSectionProps) => {
  return (
    <section
      className={cn(container(), sectionSideMargins(), className)}
      {...props}
    >
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 pb-28 md:pb-40 lg:pb-56">
        <article className="col-span-8">{mainContent}</article>
        <aside className="col-span-4 flex flex-col">{asideContent}</aside>
      </div>
    </section>
  );
};
