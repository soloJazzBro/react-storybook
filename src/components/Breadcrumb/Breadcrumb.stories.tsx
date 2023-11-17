import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Breadcrumb from './Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  decorators: [jsxDecorator],
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ARIA label for the nav element' },
        defaultValue: { summary: 'breadcrumb' } 
      }
    },
    listProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'Additional props passed as-is to the underlying <ol> element' }
      }
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'nav' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const BasicBreadcrumb: Story = {
  args: {
    label: 'My Awesome Breadcrumb',
    children: 
      <>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </>
  },
}