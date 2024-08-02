import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Layout, Theme, URL } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const ExperienceMain = () => {
  const { textLink } = Layout();
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const paragraphStyles = cn(
    isTechnicolor ? `text-putty-dark` : `text-white`,
    `max-w-2xl`
  );

  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading
        level={HeadingLevel.H2}
        className={cn(isTechnicolor ? `text-technicolor-blue` : `text-white`)}
      >
        Experience
      </Heading>
      <div className="max-w-2xl">
        <Paragraph className={paragraphStyles}>
          During my first 10 years in the field, I built visually stunning and
          performant web apps, websites, and design systems as agency owner and
          team member.
        </Paragraph>
        <Paragraph className={paragraphStyles}>
          In 2021, I made the switch to Software Engineer.
        </Paragraph>
        <Paragraph className={paragraphStyles}>
          <a
            className={cn(
              textLink(),
              !isTechnicolor ? 'text-white' : 'hover:text-technicolor-blue'
            )}
            href={URL.bottle}
            target="_blank"
          >
            @Bottle
          </a>{' '}
          As founding frontend engineer and defacto designer, I shaped our
          Merchant Dashboard and Customer Checkout experiences working closely
          with leadership and our backend engineering team. I also built and
          maintained our internal Design System to ensure our interfaces were
          top-notch and cohesive.
        </Paragraph>
        <Paragraph className={paragraphStyles}>
          <a
            className={cn(
              textLink(),
              !isTechnicolor ? 'text-white' : 'hover:text-technicolor-blue'
            )}
            href={URL.mixpanel}
            target="_blank"
          >
            @Mixpanel
          </a>{' '}
          As part of our Growth team, I’m focused on creating interactive UIs
          that convert new users as well as leading our Design System that’s
          used across marketing and product surfaces to rapidly scale intuitive,
          performant experiences.
        </Paragraph>
      </div>
    </div>
  );
};
