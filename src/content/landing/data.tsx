import { IntroductionMain } from './components/introduction-main';
import { IntroductionAside } from './components/introduction-aside';
import { ExperienceMain } from './components/experience-main';
import { ExperienceAside } from './components/experience-aside';
import { ContactMain } from './components/contact-main';
import { ContactAside } from './components/contact-aside';

export const CONTENT = {
  seo: {
    title: 'Hi, I’m Lindsey aka UI/UX Projectionist.',
    description:
      'With 12+ years experience in Brand and Product, I’ve used my frontend expertise to craft beautiful, performant and highly-functional digital interfaces.',
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
