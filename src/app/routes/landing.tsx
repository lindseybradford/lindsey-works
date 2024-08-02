import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { SEO, Theme, URL } from '@src/constants';
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
        siteName={SEO.siteName}
        title={SEO.title}
        description={SEO.description}
        ogType={SEO.ogType}
        firstLastName={SEO.firstLastName}
        twitterHandle={SEO.twitterHandle}
        canonicalUrl={URL.canonical}
        twitterProfile={URL.twitterProfile}
        linkedInProfile={URL.linkedInProfile}
        jobTitle={SEO.jobTitle}
        currentEmployer={SEO.currentEmployer}
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
