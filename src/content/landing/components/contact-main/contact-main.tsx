import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Layout, Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const ContactMain = () => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const { textLink } = Layout();
  const paragraphStyles = cn(
    isTechnicolor ? `text-pavement` : `text-putty`,
    `max-w-2xl`
  );

  const ContactLinks = () => {
    return (
      <ul className={cn('md:flex md:space-x-8 lg:space-x-12')}>
        <li>
          <a
            className={cn(
              textLink(),
              isTechnicolor ? 'hover:text-technicolor-plum' : 'text-white'
            )}
            href="mailto:lindsey.l.bradford@gmail.com"
          >
            lindsey.l.bradford@gmail.com
          </a>
        </li>
        <li>
          <a
            className={cn(
              textLink(),
              isTechnicolor ? 'hover:text-technicolor-plum' : 'text-white'
            )}
            href="https://www.linkedin.com/in/lindsey-bradford-36541479"
            target="_blank"
          >
            Linked In
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading
        level={HeadingLevel.H2}
        className={cn(isTechnicolor ? `text-technicolor-plum` : `text-white`)}
      >
        Contact
      </Heading>
      <Paragraph className={paragraphStyles}>
        <ContactLinks />
      </Paragraph>
      <Paragraph className={paragraphStyles}>
        I’m actively seeking remote full-time Software Engineer, Senior Frontend
        Engineer, and Design System Engineer roles.
      </Paragraph>
      <Paragraph className={paragraphStyles}>
        I’m enthusiastic about opportunities where I can ship beautiful product
        experiences and systems built to scale. I’m eager to collaborate,
        mentor, and learn from other engineers and cross-functional partners.
      </Paragraph>
      <Paragraph className={paragraphStyles}>
        I live in Golden, CO with my partner and rescued cats. Like a true
        Coloradan I spend my free time rock climbing, gravel biking,
        snowboarding, and backpacking.
      </Paragraph>
    </div>
  );
};
