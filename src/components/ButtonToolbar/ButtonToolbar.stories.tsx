import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import ButtonToolbar from './ButtonToolbar';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const meta = {
  title: 'Components/ButtonGroup/ButtonToolbar',
  decorators: [jsxDecorator],
  component: ButtonToolbar,
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'The ARIA role describing the button toolbar. Generally the default "toolbar" role is correct. An aria-label or aria-labelledby prop is also recommended.' },
        defaultValue: { summary: 'toolbar' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof ButtonToolbar>;

export default meta;

type Story = StoryObj<typeof ButtonToolbar>;

export const BasicToolbar: Story = {
  args: {
    role: 'toolbar',
    'aria-label': 'Toolbar with button groups',
    children: 
    <>
      <ButtonGroup className="me-2" aria-label="First group" role="group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button>
        <Button>6</Button> 
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </>
  },
}
export const ToolbarWithInputGroups: Story = {
  args: {
    role: 'toolbar',
    className: 'mb-3',
    'aria-label': 'Toolbar with Button groups',
    children: 
    <>
      <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>        
      </ButtonGroup>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </InputGroup>
    </>
  },
}
export const ToolbarWithInputGroupsAndSpacing: Story = {
  args: {
    role: 'toolbar',
    className: 'justify-content-between',
    'aria-label': 'Toolbar with Button groups',
    children: 
    <>
      <ButtonGroup aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>
      </ButtonGroup>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon2"
        />
      </InputGroup>
    </>
  },
}