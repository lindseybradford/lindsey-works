import { Meta, StoryObj } from '@storybook/react';

import { TopNav } from './top-nav';

const meta: Meta<typeof TopNav> = {
  component: TopNav,
};

export default meta;

type Story = StoryObj<typeof TopNav>;

export const Default: Story = {};
