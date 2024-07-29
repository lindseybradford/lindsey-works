import { cn } from '@src/utils/cn';
import { Layout } from '@src/constants';

import { TechnicolorSwitch } from '@src/components/ui/technicolor-switch/technicolor-switch';

const { container, sectionSideMargins } = Layout();

export const TopNav = () => {
  return (
    <nav
      className={cn(container(), sectionSideMargins(), 'lg:py-12 pt-8 pb-12')}
    >
      <TechnicolorSwitch />
    </nav>
  );
};
