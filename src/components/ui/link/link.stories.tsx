import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  component: Link,
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Link',
    to: '/',
  },
};
