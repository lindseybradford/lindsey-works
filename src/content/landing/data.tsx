import { IntroductionMain } from './introduction-main';
import { IntroductionAside } from './introduction-aside';
import { ExperienceMain } from './experience-main';
import { ExperienceAside } from './experience-aside';
import { ContactMain } from './contact-main';
import { ContactAside } from './contact-aside';

export const CONTENT = {
  seo: {
    siteName: 'lindsey.work',
    title: 'Lindsey Bradford | Senior Software Engineer',
    description:
      'With 12+ years experience in Brand and Product, I’ve used my frontend expertise to craft beautiful, performant and highly-functional digital interfaces.',
    ogType: 'profile',
    firstLastName: 'Lindsey Bradford',
    twitterHandle: '@lindseybradford',
    canonicalUrl: 'https://lindsey.work',
    twitterProfile: 'https://twitter.com/lindseybradford',
    linkedInProfile: 'https://www.linkedin.com/in/lindsey-bradford-36541479',
    jobTitle: 'Senior Software Engineer',
    currentEmployer: 'Mixpanel',
  },
  sections: [
    {
      mainContent: <IntroductionMain />,
      asideContent: <IntroductionAside />,
    },
    {
      mainContent: <ExperienceMain />,
      asideContent: <ExperienceAside />,
    },
    {
      mainContent: <ContactMain />,
      asideContent: <ContactAside />,
    },
  ],
};
