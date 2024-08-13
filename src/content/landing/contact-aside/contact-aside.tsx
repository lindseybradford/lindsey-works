import { useContext } from 'react';

import { cn } from '@src/utils/cn';
import { Layout, Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Paragraph, ParagraphSize } from 'src/components/ui/paragraph';
import { Image } from '@src/components/ui/image';
import { CodeIcon } from '@src/components/icons/code-icon';
import { ArrowRightIcon } from '@src/components/icons/arrow-right-icon';

// @ts-expect-error
import profilePhoto from './projectionist-color.webp?&as=metadata';

const MetaList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="m-0 space-y-1">{children}</ul>;
};

export const ContactAside = () => {
  const [theme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;
  const { textLink } = Layout();
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
          src={profilePhoto.src}
          height={profilePhoto.height}
          width={profilePhoto.width}
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
              <CodeIcon className="w-4 h-4 mr-2 inline-block" />
              Code by yours truly using React, TaildwindCSS, and Vite
              <ArrowRightIcon className="w-4 ml-1 mr-2 inline-block" />
              <a
                className={cn(
                  textLink(),
                  isTechnicolor ? 'hover:text-technicolor-plum' : 'text-white'
                )}
                href="https://github.com/lindseybradford/lindsey-works"
                target="_blank"
              >
                CMD + U
              </a>
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
