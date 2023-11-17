import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Dropdown from '../Dropdown';
import DropdownButton from './DropdownButton';

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
  title: 'Components/Dropdown/DropdownButton',
  decorators: [jsxDecorator],
  component: DropdownButton,
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
    href: {
      control: { type: 'text' },
      table: {
        type: { summary: 'An href passed to the Toggle component' }
      }
    },
    onClick: {
      control: { type: 'null' },
      table: {
        type: { summary: 'An onClick handler passed to the Toggle component' }
      }
    },
    title: {
      control: { type: 'null' },
      table: {
        type: { summary: 'The content of the non-toggle Button.' }
      }
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
        type: { summary: '	An ARIA accessible role applied to the Menu component.' }
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
    menuVariant: {
      options: ['dark', undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Menu color variant. Omitting this will use the default light color.' }
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
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const BasicDropdownButton: Story = {
  args: {
    id: "dropdown-basic-button",
    title: "Dropdown Button",
    children: 
      <>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </>
  },
}
export const DropdownButtonLarge: Story = {
  args: {
    id: "dropdown-basic-button",
    title: "Dropdown Large",
    size: 'lg',
    children: 
      <>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropdownButtonSmall: Story = {
  args: {
    id: "dropdown-basic-button",
    title: "Dropdown Small",
    size: 'sm',
    children: 
      <>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropdownButtonDark: Story = {
  args: {
    id: "dropdown-button-dark-example",
    variant: "secondary",
    menuVariant: "dark",
    title: "Dropdown button",
    className: "mt-2",
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropUp: Story = {
  args: {
    id: "dropdown-button-up",
    variant: "secondary",
    title: "Drop Up",
    drop: 'up',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropUpCentered: Story = {
  args: {
    id: "dropdown-button-up-centered",
    variant: "secondary",
    title: "Drop Up Centered",
    drop: 'up-centered',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropDown: Story = {
  args: {
    id: "dropdown-button-down",
    variant: "secondary",
    title: "Drop Down",
    drop: 'down',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropDownCentered: Story = {
  args: {
    id: "dropdown-button-down-centered",
    variant: "secondary",
    title: "Drop Down Centered",
    drop: 'down-centered',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropStart: Story = {
  args: {
    id: "dropdown-button-start",
    variant: "secondary",
    title: "Drop Start",
    drop: 'start',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropEnd: Story = {
  args: {
    id: "dropdown-button-end",
    variant: "secondary",
    title: "Drop End",
    drop: 'end',
    children: 
      <>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </>
  },
}
export const DropdownItemAsButton: Story = {
  args: {
    id: "dropdown-item-button",
    title: "Dropdown button",
    children: 
      <>
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
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