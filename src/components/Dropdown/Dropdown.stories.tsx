import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Dropdown from './Dropdown';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

const drop = [
  'up',
  'up-centered',
  'start',
  'end',
  'down',
  'down-centered'
];

const meta = {
  title: 'Components/Dropdown',
  decorators: [jsxDecorator],
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    drop: {
      options: drop,
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Determines the direction and location of the Menu in relation to it\'s Toggle.' },
        defaultValue: { summary: 'down' } 
      },
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' }
      }
    },
    align: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Aligns the dropdown menu to the specified side of the Dropdown toggle. You can also align the menu responsively for breakpoints starting at sm and up. The alignment direction will affect the specified breakpoint or larger.' }
      }
    },
    show: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Whether or not the Dropdown is visible.' }
      }
    },
    onToggle: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired when the Dropdown wishes to change visibility. Called with the requested show value, the DOM event, and the source that fired it: \'click\',\'keydown\',\'rootClose\', or \'select\'.' }
      }
    },
    onSelect: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired when a menu item is selected.' }
      }
    },
    focusFirstItemOnShow: {
      options: [false, true, 'keyboard', undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Controls the focus behavior for when the Dropdown is opened. Set to true to always focus the first menu item, keyboard to focus only when navigating via the keyboard, or false to disable completely. The Default behavior is false unless the Menu has a role="menu" where it will default to keyboard to match the recommended ARIA Authoring practices.' }
      },
    },
    autoClose: {
      options: [true, 'outside', 'inside', false, undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Controls the auto close behaviour of the dropdown when clicking outside of the button or the list.' }
      },
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const BasicDropdown: Story = {
  args: {
    children: 
      <>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </>
  },
}
export const SplitButton: Story = {
  args: {
    as: ButtonGroup,
    children: 
      <>
        <Button variant="secondary">Split Button</Button>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </>
  },
}
export const DropdownDark: Story = {
  args: {
    children: 
      <>
        <Dropdown.Toggle id="dropdown-dark-example" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </>
  },
}
