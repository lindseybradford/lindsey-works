import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const IntroductionAside = () => {
  return (
    <aside className="lg:pt-14 md:pt-12 flex flex-col justify-center space-y-12">
      <div className="text-technicolor-green group-green">
        <MetaList>
          <li>
            <Paragraph isFlush>12</Paragraph>
          </li>
        </MetaList>
        <MetaLabel tagName="h3" className="-ml-3">
          Years experience
        </MetaLabel>
      </div>

      <div className="text-technicolor-plum group-plum">
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
        <MetaLabel tagName="h3" className="-ml-3">
          Languages
        </MetaLabel>
      </div>

      <div className="text-technicolor-blue group-blue">
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
        <MetaLabel tagName="h3" className="-ml-3">
          Mediums
        </MetaLabel>
      </div>
    </aside>
  );
};
