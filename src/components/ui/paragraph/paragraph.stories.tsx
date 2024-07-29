import { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {};
