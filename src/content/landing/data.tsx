import { IntroductionMain } from './introduction-main';
import { IntroductionAside } from './introduction-aside';
import { ExperienceMain } from './experience-main';
import { ExperienceAside } from './experience-aside';
import { ContactMain } from './contact-main';
import { ContactAside } from './contact-aside';

export const CONTENT = {
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
