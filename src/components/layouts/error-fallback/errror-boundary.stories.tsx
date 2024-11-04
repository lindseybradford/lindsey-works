import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ErrorFallback } from './errror-fallback';

const meta: Meta<typeof ErrorFallback> = {
  component: ErrorFallback,
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {
    children: 'ErrorFallback',
    to: '/',
  },
};
