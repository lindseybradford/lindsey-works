import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { ContentSection } from '@src/components/layouts/content-section';
import { TopNav } from '@src/components/layouts/top-nav';
import { SEOTags } from '../seo-tags';
import { CONTENT } from '@src/content/landing/data';

export const LandingRoute = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <SEOTags
        siteName={CONTENT.seo.siteName}
        title={CONTENT.seo.title}
        description={CONTENT.seo.description}
        ogType={CONTENT.seo.ogType}
        firstLastName={CONTENT.seo.firstLastName}
        twitterHandle={CONTENT.seo.twitterHandle}
        canonicalUrl={CONTENT.seo.canonicalUrl}
        twitterProfile={CONTENT.seo.twitterProfile}
        linkedInProfile={CONTENT.seo.linkedInProfile}
        jobTitle={CONTENT.seo.jobTitle}
        currentEmployer={CONTENT.seo.currentEmployer}
      />
      <div
        className={cn(
          theme === Theme.Dark ? `theme-monochrome` : `theme-technicolor`,
          `font-body min-h-screen`
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
      <div className="noise"></div>
    </>
  );
};
