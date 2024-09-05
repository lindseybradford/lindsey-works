import { useContext } from 'react';

import { ContentSectionLayout, Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { TechnicolorIcon } from '@src/components/icons/technicolor-icon';
import { cn } from '@src/utils/cn';
import './technicolor-switch.css';

export const TechnicolorSwitch = () => {
  const { textLinkPressed } = ContentSectionLayout();
  const [theme, setTheme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;

  const handleSwitch = () => {
    isTechnicolor ? setTheme(Theme.Dark) : setTheme(Theme.Technicolor);
  };

  return (
    <button
      className={cn(
        'flex items-center',
        'transition-all duration-200 ease-in-out cursor-pointer',
        'active:translate-y-1'
      )}
      onClick={() => handleSwitch()}
    >
      <TechnicolorIcon
        className="w-7 h-7"
        innerClassName={cn('icon', isTechnicolor && 'icon--technicolor')}
      />

      <span
        className={cn(isTechnicolor ? `text-pavement` : `text-white`, `ml-2`)}
      >
        Amazzzing Technicolor •
      </span>
    </button>
  );
};
