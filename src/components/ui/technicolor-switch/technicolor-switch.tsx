import { useContext } from 'react';

import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { TechnicolorIcon } from '@src/components/icons/technicolor-icon';
import { cn } from '@src/utils/cn';

export const TechnicolorSwitch = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const isTechnicolor = theme === Theme.Technicolor;

  const handleSwitch = () => {
    isTechnicolor ? setTheme(Theme.Dark) : setTheme(Theme.Technicolor);
  };

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => handleSwitch()}
    >
      <TechnicolorIcon className="w-7 h-7" />
      <span
        className={cn(isTechnicolor ? `text-pavement` : `text-white`, `ml-2`)}
      >
        Amazzzing Technicolor •
      </span>
    </div>
  );
};
