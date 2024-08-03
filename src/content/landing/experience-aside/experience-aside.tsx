import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Layout, Theme, URL } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ExperienceAside = () => {
  const { sectionTopBarAtSm } = Layout();
  const { textLink } = Layout();
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;

  return (
    <aside
      className={cn(
        sectionTopBarAtSm(),
        'lg:self-end lg:min-w-56 lg:pt-32 md:pt-12 flex flex-col justify-center space-y-12'
      )}
    >
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-plum group-plum`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>
              <a className={textLink()} href={URL.mixpanel} target="_blank">
                Mixpanel
              </a>
            </Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="p">
          Senior Software Engineer <br /> 2023 - Present
        </MetaLabel>
      </div>
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-blue group-blue`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>
              <a className={textLink()} href={URL.bottle} target="_blank">
                Bottle
              </a>
            </Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="p">
          Software Engineer <br /> 2021 - 2022
        </MetaLabel>
      </div>
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-orange group-orange`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>
              <a className={textLink()} href={URL.viget} target="_blank">
                Viget Labs
              </a>
            </Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="p">
          Senior Frontend Developer <br /> 2020 - 2021
        </MetaLabel>
      </div>
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-green group-green`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>Telegraph</Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="p">
          Co-Founder, Tech Lead <br /> 2012 - 2020
        </MetaLabel>
      </div>
    </aside>
  );
};
