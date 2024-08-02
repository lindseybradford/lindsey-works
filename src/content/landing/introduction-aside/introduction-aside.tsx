import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const IntroductionAside = () => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;

  return (
    <aside className="lg:self-end lg:min-w-56 lg:pt-14 md:pt-12 flex flex-col justify-center space-y-12">
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-green group-green`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>12</Paragraph>
          </li>
        </MetaList>
        <MetaLabel
          tagName="p"
          className={cn(!isTechnicolor && `opacity-60`, `-ml-3`)}
        >
          Years experience
        </MetaLabel>
      </div>

      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-plum group-plum`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <li>
            <Paragraph isFlush>Vue</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>React</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>NextJS</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>TypeScript</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>GraphQL</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>Node.js</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>CSS/HTML/JS</Paragraph>
          </li>
        </MetaList>
        <MetaLabel
          tagName="p"
          className={cn(!isTechnicolor && `opacity-60`, `-ml-3`)}
        >
          Languages
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
            <Paragraph isFlush>Web apps</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>Design systems</Paragraph>
          </li>
          <li>
            <Paragraph isFlush>Websites</Paragraph>
          </li>
        </MetaList>
        <MetaLabel
          tagName="p"
          className={cn(!isTechnicolor && `opacity-60`, `-ml-3`)}
        >
          Mediums
        </MetaLabel>
      </div>
    </aside>
  );
};
