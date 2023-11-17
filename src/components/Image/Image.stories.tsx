import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Image from './Image';

const meta = {
  title: 'Components/Image',
  decorators: [jsxDecorator],
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    fluid: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Sets image as fluid image.' },
        defaultValue: { summary: 'false' } 
      }
    },
    rounded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Sets image shape as rounded.' },
        defaultValue: { summary: 'false' } 
      }
    },
    roundedCircle: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Sets image shape as circle.' },
        defaultValue: { summary: 'false' } 
      }
    },
    thumbnail: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Sets image shape as thumbnail.' },
        defaultValue: { summary: 'false' } 
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

export const Rounded: Story = {
  args: {
    src: './171x180.svg',
    rounded: true
  },
}
export const RoundedCircle: Story = {
  args: {
    src: './171x180.svg',
    roundedCircle: true
  },
}
export const Thumbnail: Story = {
  args: {
    src: './171x180.svg',
    thumbnail: true
  },
}
export const Fluid: Story = {
  args: {
    src: './934x250.svg',
    fluid: true
  },
}