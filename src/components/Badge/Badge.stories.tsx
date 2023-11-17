import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Badge from './Badge';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const meta = {
  title: 'Components/Badge',
  decorators: [jsxDecorator],
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'The visual style of the badge' },
        defaultValue: { summary: 'primary' } 
      }
    },
    pill: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Add the pill modifier to make badges more rounded with some additional horizontal padding' },
        defaultValue: { summary: 'false' } 
      }
    },
    text: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets badge text color' }
      }
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'span' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const BasicBadge: Story = {
  args: {
    bg: 'primary',
    children: 'Badge'
  },
}

export const Pill: Story = {
  args: {
    bg: 'secondary',
    pill: true,
    children: 1
  },
}