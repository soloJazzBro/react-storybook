import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Navbar from './Navbar';
import Nav from '../Nav';
import NavDropdown from '../NavDropdown';
import Form from 'react-bootstrap/Form';
import Container from '../Container';
import Button from '../Button';

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
  title: 'Components/Navbar',
  decorators: [jsxDecorator],
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['light', 'dark', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'The general visual variant a the Navbar. Use in combination with the bg prop, background-color utilities, or your own background styles.' }
      }
    },
    expand: {
      control: { type: 'null' },
      table: {
        type: { summary: 'The breakpoint, below which, the Navbar will collapse. When true the Navbar will always be expanded regardless of screen size.' }
      }
    },
    bg: {
      options: bg,
      control: { type: 'select' },
      table: {
        type: { summary: 'A convenience prop for adding bg-* utility classes since they are so commonly used here. light and dark are common choices but any bg-* class is supported, including any custom ones you might define. Pairs nicely with the variant prop.' }
      }
    },
    fixed: {
      options: ['top', 'bottom', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Create a fixed navbar along the top or bottom of the screen, that scrolls with the page. A convenience prop for the fixed-* positioning classes.' }
      }
    },
    sticky: {
      options: ['top', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Position the navbar at the top of the viewport, but only after scrolling past it. A convenience prop for the sticky-top positioning class. Not supported in <= IE11 and other older browsers without a polyfill' }
      }
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Set a custom element for this component.' }
      }
    },
    onToggle: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired when the <Navbar> body collapses or expands. Fired when a <Navbar.Toggle> is clicked and called with the new expanded boolean value.' }
      }
    },
    onSelect: {
      control: { type: 'null' },
      table: {
        type: { summary: 'A callback fired when a descendant of a child <Nav> is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of <Nav>. Does nothing if no <Nav> or <Nav> descendants exist. The callback is called with an eventKey, which is a prop from the selected <Nav> descendant, and an event. For basic closing behavior after all <Nav> descendant onSelect events in mobile viewports, try using collapseOnSelect. Note: If you are manually closing the navbar using this OnSelect prop, ensure that you are setting expanded to false and not toggling between true and false.' }
      }
    },
    collapseOnSelect: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Toggles expanded to false after the onSelect event of a descendant of a child <Nav> fires. Does nothing if no <Nav> or <Nav> descendants exist. Manually controlling expanded via the onSelect callback is recommended instead, for more complex operations that need to be executed after the select event of <Nav> descendants.' }
      }
    },
    expanded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Controls the visibility of the navbar body' }
      }
    },
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'The ARIA role for the navbar, will default to \'navigation\' for Navbars whose as is something other than <nav>.' },
        defaultValue: { summary: 'navigation' } 
      }
    },
    className: {
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
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const BasicNavbar: Story = {
  args: {
    bg: "light",
    variant: "light",
    expand: "lg",
    className: "bg-body-tertiary",
    children: 
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
  },
}

export const Brand: Story = {
  args: {
    className: "bg-body-tertiary",
    style: { width: '-webkit-fill-available'},
    children: 
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="./react-bootstrap-logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  },
}

export const TextAndNonNavLinks: Story = {
  args: {
    className: "bg-body-tertiary",
    style: { width: '-webkit-fill-available'},
    children: 
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
  },
}

export const ColorSchemeDark: Story = {
  args: {
    bg: "dark",
    variant: "dark",
    children: 
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
  },
}

export const ColorSchemeLight: Story = {
  args: {
    bg: "light",
    variant: "light",
    children: 
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
  },
}

export const ColorSchemePrimary: Story = {
  args: {
    bg: "primary",
    variant: "dark",
    children: 
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
  },
}

export const NavbarScroll: Story = {
  args: {
    expand: false,
    className: "bg-body-tertiary",
    children: 
    <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
  },
}
