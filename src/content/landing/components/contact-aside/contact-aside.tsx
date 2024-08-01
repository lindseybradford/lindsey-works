import { Paragraph, ParagraphSize } from 'src/components/ui/paragraph';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ContactAside = () => {
  return (
    <aside className="lg:pt-14 md:pt-12 flex flex-col justify-center space-y-12">
      <div className="text-technicolor-rose group-rose">
        <MetaList>
          <li>
            <Paragraph size={ParagraphSize.Small}>
              Code by yours truly using React, TaildwindCSS, and Vite
            </Paragraph>
            <Paragraph size={ParagraphSize.Small} className="max-w-96">
              Typeset in GT Cinetype by Grilli Type and Akkurat Mono by Lineto
            </Paragraph>
            <Paragraph size={ParagraphSize.Small}>
              Copyright {new Date().getFullYear()}
            </Paragraph>
          </li>
        </MetaList>
      </div>
    </aside>
  );
};
