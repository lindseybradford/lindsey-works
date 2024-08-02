import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Layout, Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const IntroductionMain = () => {
  const { textTransition } = Layout();
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const paragraphStyles = cn(isTechnicolor ? 'text-putty-dark' : 'text-white');

  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading
        level={HeadingLevel.H1}
        className={cn(isTechnicolor ? 'text-pavement' : 'text-white')}
      >
        Hi, I’m Lindsey{' '}
        <span
          className={cn(
            isTechnicolor ? 'text-pavement' : 'text-putty ',
            textTransition()
          )}
        >
          aka
        </span>{' '}
        <br />
        <span
          className={cn(
            isTechnicolor ? 'text-technicolor-orange' : 'text-white',
            textTransition()
          )}
        >
          UI/UX Projectionist.
        </span>
      </Heading>
      <div className="max-w-2xl">
        <Paragraph className={paragraphStyles}>
          With 12+ years experience in Brand and Product, I’ve used my frontend
          expertise to craft beautiful, performant and highly-functional digital
          interfaces.
        </Paragraph>
        <Paragraph className={paragraphStyles}>
          I believe in leaving things better than I found them, making clarity
          before haste, and that our future is best made together.
        </Paragraph>
      </div>
    </div>
  );
};
