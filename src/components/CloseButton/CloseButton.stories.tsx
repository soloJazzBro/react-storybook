import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import CloseButton from './CloseButton';

const meta = {
  title: 'Components/CloseButton',
  decorators: [jsxDecorator],
  component: CloseButton,
  tags: ['autodocs'],
  argTypes: {
    'aria-label': {
      control: { type: 'text' },
      table: {
        type: { summary: 'An accessible label indicating the relevant information about the Close Button.' },
        defaultValue: { summary: 'Close' } 
      }
    },
    onClick: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired after the Close Button is clicked.' }
      }
    },
    variant: {
      options: ['white', undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Render different color variant for the button. Omitting this will render the default dark color.' }
      },
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const BasicCloseButton: Story = {
  args: {
  },
}
export const Disabled: Story = {
  args: {
    disabled: true
  },
}
export const Variant: Story = {
  args: {
    variant: 'white'
  },
}
export const Accessibility: Story = {
  args: {
    'aria-label': 'Hide'
  },
}