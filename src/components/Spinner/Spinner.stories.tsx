import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Spinner from './Spinner';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  undefined
];

const meta = {
  title: 'Components/Spinner',
  decorators: [jsxDecorator],
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'The visual color style of the spinner' }
      }
    },
    animation: {
      options: ['border', 'grow', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Changes the animation style of the spinner.' },
        defaultValue: { summary: 'true' } 
      }
    },
    size: {
      options: ['sm', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Component size variations.' }
      }
    },
    children: {
      control: { type: 'null' },
      table: {
        type: { summary: 'This component may be used to wrap child elements or components.' }
      }
    },
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An ARIA accessible role applied to the Menu component. This should generally be set to \'status\'' }
      }
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'div' } 
      }
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Border: Story = {
  args: {
    animation: 'border',
    role: 'status',
    children: <span className="visually-hidden">Loading...</span>
  },
}

export const Grow: Story = {
  args: {
    animation: 'grow',
    role: 'status',
    children: <span className="visually-hidden">Loading...</span>
  },
}