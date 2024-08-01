import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ExperienceAside = () => {
  return (
    <aside className="lg:pt-32 md:pt-12 flex flex-col justify-center space-y-12">
      <div className="text-technicolor-plum group-plum">
        <MetaList>
          <li>
            <Paragraph isFlush>Mixpanel</Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="h3">
          Software Engineer <br /> 2023 - Present
        </MetaLabel>
      </div>
      <div className="text-technicolor-blue group-blue">
        <MetaList>
          <li>
            <Paragraph isFlush>Bottle</Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="h3">
          Software Engineer <br /> 2021 - 2022
        </MetaLabel>
      </div>
      <div className="text-technicolor-orange group-orange">
        <MetaList>
          <li>
            <Paragraph isFlush>Viget Labs</Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="h3">
          Senior Frontend Developer <br /> 2020 - 2021
        </MetaLabel>
      </div>
      <div className="text-technicolor-green group-green">
        <MetaList>
          <li>
            <Paragraph isFlush>Telegraph</Paragraph>
          </li>
        </MetaList>
        <MetaLabel hasDingbat={false} tagName="h3">
          Co-Founder, Tech Lead <br /> 2012 - 2020
        </MetaLabel>
      </div>
    </aside>
  );
};
