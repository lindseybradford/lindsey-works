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
  // Todo: Implement theme through context provider
  return (
    <section className={className} {...props}>
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-12">
        <article className="col-span-7">{mainContent}</article>
        <aside className="col-span-5">{asideContent}</aside>
      </div>
    </section>
  );
};
