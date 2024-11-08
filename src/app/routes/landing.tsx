import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@src/components/layouts/error-fallback';

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
          theme === Theme.Dark ? `theme-moody-monochrome` : `theme-technicolor`,
          `font-body min-h-screen`
        )}
      >
        <TopNav />
        <main>
          {CONTENT.sections.map((section, id) => {
            const contentSectionProps = {
              mainContent: section.mainContent,
              asideContent: section.asideContent,
              ...(section.bottomContent && {
                bottomContent: section.bottomContent,
              }),
            };
            return <ContentSection key={id} {...contentSectionProps} />;
          })}
        </main>
      </div>
      <div className="noise"></div>
    </ErrorBoundary>
  );
};
