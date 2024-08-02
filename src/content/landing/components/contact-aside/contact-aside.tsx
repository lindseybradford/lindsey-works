import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph, ParagraphSize } from 'src/components/ui/paragraph';
import projectionistImage from '@public/projectionist.webp';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ContactAside = () => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const paragraphStyles = cn(isTechnicolor ? `text-pavement` : `text-putty`);

  return (
    <aside className="lg:pt-14 md:pt-12 flex flex-col justify-center space-y-12">
      <div
        className={cn(
          isTechnicolor
            ? `text-technicolor-rose group-rose`
            : `text-white group-white`
        )}
      >
        <MetaList>
          <img
            src={projectionistImage}
            alt="Lindsey Bradford"
            className="max-w-96 mb-10"
          />
          <li>
            <Paragraph size={ParagraphSize.Base} isFlush className="mb-5">
              Colophon
            </Paragraph>
            <Paragraph size={ParagraphSize.XSmall} className={paragraphStyles}>
              Code by yours truly using React, TaildwindCSS, and Vite
            </Paragraph>
            <Paragraph
              size={ParagraphSize.XSmall}
              className={cn(paragraphStyles, 'max-w-96')}
            >
              Typeset in GT Cinetype by Grilli Type and Akkurat Mono by Lineto
            </Paragraph>
            <Paragraph size={ParagraphSize.XSmall} className={paragraphStyles}>
              Copyright {new Date().getFullYear()}
            </Paragraph>
          </li>
        </MetaList>
      </div>
    </aside>
  );
};
