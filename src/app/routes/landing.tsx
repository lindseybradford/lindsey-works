import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { ContentSection } from '@src/components/layouts/content-section';
import { TopNav } from '@src/components/layouts/top-nav';
import { CONTENT } from '@src/content/landing/data';
import { cn } from '@src/utils/cn';

export const LandingRoute = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>{CONTENT.seo.title}</title>
        <meta name="description" content={CONTENT.seo.description} />
      </Helmet>
      <div
        className={cn(
          theme === Theme.Dark ? `bg-pavement` : `bg-white`,
          `font-mono min-h-screen`
        )}
      >
        <TopNav />
        <main>
          {CONTENT.sections.map((section, id) => {
            return (
              <ContentSection
                key={id}
                mainContent={section.mainContent}
                asideContent={section.asideContent}
              />
            );
          })}
        </main>
      </div>
      <div className="bg"></div>
    </>
  );
};
