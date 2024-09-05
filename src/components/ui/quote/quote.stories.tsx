import { Meta, StoryObj } from '@storybook/react';

import { Quote } from './quote';

const meta: Meta<typeof Quote> = {
  component: Quote,
};

export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {};
