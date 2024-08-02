import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph, ParagraphSize } from 'src/components/ui/paragraph';
import { Image } from '@src/components/ui/image';
import projectionistImage from '@public/projectionist-color.webp';

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
        <Image
          src={projectionistImage}
          alt="Lindsey Bradford"
          className="mb-10 aspect-1 max-w-52 md:max-w-lg lg:max-w-lg"
          classNameInner={cn('rounded-3xl', !isTechnicolor && 'grayscale')}
        />
        <MetaList>
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
