import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import TABLE from './Table';

const meta = {
  title: 'Components/Table',
  decorators: [jsxDecorator],
  component: TABLE,
  tags: ['autodocs'],
  argTypes: {
    striped: {
      options: [true, false, 'columns', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Adds zebra-striping to any table row within the <tbody>. Use columns to add zebra-striping to any table column.' }
      }
    },
    bordered: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Adds borders on all sides of the table and cells.' }
      }
    },
    borderless: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Removes all borders on the table and cells, including table header.' }
      }
    },
    hover: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Enable a hover state on table rows within a <tbody>.' }
      }
    },
    size: {
      options: ['sm', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Make tables more compact by cutting cell padding in half by setting size as sm.' }
      }
    },
    variant: {
      options: ['dark', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Invert the colors of the table — with light text on dark backgrounds by setting variant as dark.' }
      }
    },
    responsive: {
      options: ['sm', 'md', 'lg', 'xl', true, false, undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Responsive tables allow tables to be scrolled horizontally with ease. Across every breakpoint, use responsive for horizontally scrolling tables. Responsive tables are wrapped automatically in a div. Use responsive="sm", responsive="md", responsive="lg", or responsive="xl" as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof TABLE>;

export default meta;

type Story = StoryObj<typeof TABLE>;

export const Table: Story = {
  args: {
    striped: true,
    bordered: true,
    hover: true,
    children: 
    <>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </>
  },
}

export const AlwaysResponsive: Story = {
  args: {
    responsive: true,
    bordered: true,
    children: 
    <>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </>
  },
}

export const BreakpointSpecific: Story = {
  args: {
    responsive: 'sm',
    bordered: true,
    children: 
    <>
      <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
    </>
  },
}