import { Helmet } from 'react-helmet-async';

import { ContentSection } from '@src/components/layouts/content-section';
import { TopNav } from '@src/components/layouts/top-nav';
import { CONTENT } from '@src/content/landing/data';

export const LandingRoute = () => {
  return (
    <>
      <Helmet>
        <title>{CONTENT.seo.title}</title>
        <meta name="description" content={CONTENT.seo.description} />
      </Helmet>
      <div className="font-mono bg-white min-h-screen">
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
    </>
  );
};
