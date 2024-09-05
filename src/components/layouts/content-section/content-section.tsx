import { cn } from '@src/utils/cn';
import { ContentSectionLayout } from '@src/constants';

const { container, sectionSideMargins } = ContentSectionLayout();

type ContentSectionProps = {
  className?: string;
  mainContent: React.ReactNode;
  asideContent: React.ReactNode;
  bottomContent?: React.ReactNode;
};

export const ContentSection = ({
  className,
  mainContent,
  asideContent,
  bottomContent,
  ...props
}: ContentSectionProps) => {
  return (
    <section
      className={cn(
        container(),
        sectionSideMargins(),
        className,
        'pb-28 md:pb-40 lg:pb-56'
      )}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12">
        <article className="col-span-1 md:col-span-7 lg:col-span-8">
          {mainContent}
        </article>
        <aside className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col">
          {asideContent}
        </aside>
      </div>
      {bottomContent && bottomContent}
    </section>
  );
};
