import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TechnicolorSwitch } from './technicolor-switch';

const meta: Meta<typeof TechnicolorSwitch> = {
  component: TechnicolorSwitch,
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof TechnicolorSwitch>;

export const Default: Story = {
  args: {
    children: 'TechnicolorSwitch',
    to: '/',
  },
};
