import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Nav from './Nav';

const bg = [
  undefined,
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light'
];

const meta = {
  title: 'Components/Nav',
  decorators: [jsxDecorator],
  component: Nav,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['tabs', 'pills', 'underline', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'The visual variant of the nav items.' }
      }
    },
    activeKey: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Marks the NavItem with a matching eventKey (or href if present) as active.' }
      }
    },
    defaultActiveKey: {
      control: { type: 'text' },
      table: {
        type: { summary: 'The default active key that is selected on start.' }
      }
    },
    fill: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Have all NavItems proportionately fill all available width.' }
      }
    },
    justify: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Have all NavItems evenly fill all available width.' }
      }
    },
    onSelect: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired when a NavItem is selected.' }
      }
    },
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly. When the role is "tablist", NavLink focus is managed according to the ARIA authoring practices for tabs.' }
      }
    },
    navbar: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.' }
      }
    },
    navbarScroll: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Enable vertical scrolling within the toggleable contents of a collapsed Navbar.' }
      }
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof Nav>;

export const BasicNav: Story = {
  args: {
    activeKey: "/home",
    onSelect: function (selectedKey: any) { alert(`selected ${selectedKey}`)},
    children: 
    <>
      <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </>
  },
}

export const UnorderedList: Story = {
  args: {
    defaultActiveKey: "/home",
    as: "ul",
    children: 
    <>
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </>
  },
}

export const AlignCenter: Story = {
  args: {
    className: "justify-content-center",
    activeKey: "/home",
    children: 
    <>
      <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
    </>
  },
}

export const AlignRight: Story = {
  args: {
    className: "justify-content-end",
    activeKey: "/home",
    children: 
    <>
      <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
    </>
  },
}

export const Vertical: Story = {
  args: {
    defaultActiveKey: "/home",
    className: "flex-column",
    children: 
    <>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </>
  },
}