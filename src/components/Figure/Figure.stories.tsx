import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Figure from './Figure';

const meta = {
  title: 'Components/Figure',
  decorators: [jsxDecorator],
  component: Figure,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'figure' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof Figure>;

export const BasicFigure: Story = {
  args: {
    children: 
      <>
       <Figure.Image
          style={{width: '171px', height: '180px'}}
          alt="171x180"
          src="./171x180.svg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </>

  },
}
