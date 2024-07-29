import { Meta, StoryObj } from '@storybook/react';

import { ContentSection } from './content-section';

const meta: Meta<typeof ContentSection> = {
  component: ContentSection,
};

export default meta;

type Story = StoryObj<typeof ContentSection>;

export const Default: Story = {};
