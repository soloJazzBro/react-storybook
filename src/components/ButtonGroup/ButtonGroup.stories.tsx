import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import ButtonGroup from './ButtonGroup';
import Button from '../Button';
const meta = {
  title: 'Components/ButtonGroup',
  decorators: [jsxDecorator],
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'lg', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets the size for all Buttons in the group.' }
      },
    },
    vertical: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Make the set of Buttons appear vertically stacked.' },
        defaultValue: { summary: 'false' } 
      }
    },
    role: {
      options: ['group', 'arial-label', 'aria-labelledby', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'An ARIA role describing the button group. Usually the default "group" role is fine. An aria-label or aria-labelledby prop is also recommended.' },
        defaultValue: { summary: 'group' } 
      },
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'div' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const BasicButtonGroup: Story = {
  args: {
    role: 'group',
    children: 
      <>
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </>
  },
}
export const ButtonGroupLarge: Story = {
  args: {
    role: 'group',
    size: 'lg',
    children: 
      <>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </>
  },
}
export const ButtonGroupSmall: Story = {
  args: {
    role: 'group',
    size: 'sm',
    children: 
      <>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </>
  },
}