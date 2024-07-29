import { Meta, StoryObj } from '@storybook/react';

import { MetaLabel } from './meta-label';

const meta: Meta<typeof MetaLabel> = {
  component: MetaLabel,
};

export default meta;

type Story = StoryObj<typeof MetaLabel>;

export const Default: Story = {};
