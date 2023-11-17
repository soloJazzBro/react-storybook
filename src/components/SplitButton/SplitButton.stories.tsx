import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import SplitButton from './SplitButton';
import Dropdown from '../Dropdown';

const variants = [
  'white',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  'link',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-danger',
  'outline-warning',
  'outline-info',
  'outline-dark',
  'outline-light'
];

const meta = {
  title: 'Components/Dropdown/SplitButton',
  decorators: [jsxDecorator],
  component: SplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.' }
      }
    },
    toggleLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Accessible label for the toggle; the value of title if not specified.' },
        defaultValue: { summary: 'Toggle dropdown' } 
      },
    },
    href: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An href passed to the non-toggle Button' }
      }
    },
    target: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An anchor target passed to the non-toggle Button' }
      }
    },
    onClick: {
      control: { type: 'null' },
      table: {
        type: { summary: 'An onClick handler passed to the non-toggle Button' }
      }
    },
    title: {
      control: { type: 'null' },
      table: {
        type: { summary: 'The content of the non-toggle Button.' }
      }
    },
    type: {
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'A type passed to the non-toggle Button' },
        defaultValue: { summary: 'button' } 
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Disables both Buttons' }
      }
    },
    align: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Aligns the dropdown menu.' }
      }
    },
    menuRole: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An ARIA accessible role applied to the Menu component' }
      }
    },
    renderMenuOnMount: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Whether to render the dropdown menu in the DOM before the first time it is shown' }
      }
    },
    rootCloseEvent: {
      options: ["click", "mousedown", undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Which event when fired outside the component will cause it to be closed.' }
      },
    },
    flip: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js\'s flip docs.' }
      }
    },
    variant: {
      options: variants,
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Component visual or contextual style variants.' }
      },
    },
    size: {
      options: ["sm", "lg", undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Component size variations.' }
      },
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof SplitButton>;

export default meta;

type Story = StoryObj<typeof SplitButton>;

export const BasicSplitButton: Story = {
  args: {
    id: "basic-split-button",
    title: "Split Button",
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const SplitButtonLarge: Story = {
  args: {
    id: "split-button-lg",
    title: "Split Button Large",
    size: 'lg',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const SplitButtonSmall: Story = {
  args: {
    id: "split-button-sm",
    title: "Split Button Small",
    size: 'sm',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropUp: Story = {
  args: {
    id: "drop-up",
    title: "Drop Up",
    drop: 'up',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropUpCentered: Story = {
  args: {
    id: "drop-up-centered",
    title: "Drop Up Centered",
    drop: 'up-centered',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropDown: Story = {
  args: {
    id: "drop-down",
    title: "Drop Down",
    drop: 'down',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropDownCentered: Story = {
  args: {
    id: "drop-down-centered",
    title: "Drop Down Centered",
    drop: 'down-centered',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropStart: Story = {
  args: {
    id: "drop-start",
    title: "Drop Start",
    drop: 'start',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropEnd: Story = {
  args: {
    id: "drop-end",
    title: "Drop End",
    drop: 'end',
    children: 
      <>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const MenuAlign: Story = {
  args: {
    id: "menu-align",
    title: "Menu Align",
    align: 'end',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>a</Dropdown.Item>
        <Dropdown.Item href="#/action-2">b</Dropdown.Item>
        <Dropdown.Item href="#/action-3">c</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">d</Dropdown.Item>
      </>
  },
}
export const MenuHeader: Story = {
  args: {
    id: "menu-header",
    title: "Menu Header",
    children: 
      <>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </>
  },
}