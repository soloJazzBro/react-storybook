import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Pagination from './Pagination';

const meta = {
  title: 'Components/Pagination',
  decorators: [jsxDecorator],
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm','lg', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets the size of all PageItems.' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export const BasicPagination: Story = {
  args: {
    children: 
      <>
        {items}
      </>
  },
}

export const MoreOptions: Story = {
  args: {
    children: 
      <>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </>
  },
}