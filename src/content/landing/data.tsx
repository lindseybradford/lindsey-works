import { IntroductionMain } from './introduction-main';
import { IntroductionAside } from './introduction-aside';
import { IntroductionBottom } from './introduction-bottom';
import { ExperienceMain } from './experience-main';
import { ExperienceAside } from './experience-aside';
import { ExperienceBottom } from './experience-bottom';
import { ContactMain } from './contact-main';
import { ContactAside } from './contact-aside';

export const CONTENT = {
  sections: [
    {
      mainContent: <IntroductionMain />,
      asideContent: <IntroductionAside />,
      bottomContent: <IntroductionBottom />,
    },
    {
      mainContent: <ExperienceMain />,
      asideContent: <ExperienceAside />,
      bottomContent: <ExperienceBottom />,
    },
    {
      mainContent: <ContactMain />,
      asideContent: <ContactAside />,
    },
  ],
};
