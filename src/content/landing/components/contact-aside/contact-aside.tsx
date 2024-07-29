import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ContactAside = () => {
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
    </aside>
  );
};
