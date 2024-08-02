import { createContext } from 'react';

import { Theme } from '@src/constants';

export const ThemeContext = createContext<[Theme, React.Dispatch<React.SetStateAction<Theme>>]>([null!, () => null!]);
