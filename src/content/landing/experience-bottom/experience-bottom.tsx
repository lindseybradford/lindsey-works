import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { GridLayout, Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { CTAWell } from '@src/components/ui/cta-well';
import { Quote } from '@src/components/ui/quote';

import attributionOne from './assets/wS.webp';
import attributionTwo from './assets/tO.webp';

export const ExperienceBottom = () => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const ctaWellTextStyle = cn(
    isTechnicolor ? `text-putty-dark` : `text-white`,
    `leading-tight font-heading text-lg`
  );
  const paragraphStyle = cn(isTechnicolor ? `text-putty-dark` : `text-white`);
  const { parentGridRelaxed, halfColumn } = GridLayout.slots;

  return (
    <div className="pt-28 lg:pt-14">
      <div>
        <CTAWell
          btnText="View Resume"
          btnUrl="https://telegraph.notion.site/Lindsey-Bradford-f24b2726ada54591bcc9204f25bc66db"
        >
          <div className={ctaWellTextStyle}>Lindsey Bradford</div>
          <div className={cn(ctaWellTextStyle, 'opacity-70 -mt-1')}>
            Currently Software Engineer at MixPanel
          </div>
        </CTAWell>
      </div>
      <div className={cn('pt-28 md:pt-48 ', parentGridRelaxed)}>
        <div className={cn(halfColumn, 'lg:flex grow')}>
          <Quote
            textClassName={paragraphStyle}
            image={{
              src: attributionTwo,
              height: '295',
              width: '295',
              alt: 'Tara Odorizzi — Senior Interactive Designer, Mixpanel',
            }}
            attribution="Tara Odorizzi"
            role="Senior Interactive Designer, Mixpanel"
          >
            Lindsey is extremely thorough... her ability to think systematically
            is a huge asset to the team…Her work in building out and maintaining
            Heliograph has helped design stay on the same page as engineering.
          </Quote>
        </div>
        <div className={cn(halfColumn, 'lg:flex grow lg:mt-0 mt-14')}>
          <Quote
            textClassName={paragraphStyle}
            image={{
              src: attributionOne,
              height: '800',
              width: '800',
              alt: 'Will Schreiber — Co-Founder, Bottle',
            }}
            attribution="Will Schreiber"
            role="Co-Founder, Bottle"
          >
            Whether it's a quick fix another team needs now please, or to work
            through a plan together on something else coming up in a few weeks,
            Lindsey is always there to take charge on, map out, and generally
            stick the landing on whatever she can get her hands on.
          </Quote>
        </div>
      </div>
    </div>
  );
};
