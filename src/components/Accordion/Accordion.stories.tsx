import { StoryObj, Meta } from "@storybook/react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { jsxDecorator } from "storybook-addon-jsx";
import Card from '../Card';
import Button from '../Button';
import Accordion from './Accordion';

function CustomToggle({...props}) {
  const decoratedOnClick = useAccordionButton(props.eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <Button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {props.children}
    </Button>
  );
}

const meta = {
  title: 'Components/Accordion',
  decorators: [jsxDecorator],
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Set a custom element for this component' }
      }
    },
    activeKey: {
      control: { type: 'text' },
      table: {
        type: { summary: 'The current active key that corresponds to the currently expanded card' }
      }
    },
    defaultActiveKey: {
      control: { type: 'text' },
      table: {
        type: { summary: 'The default active key that is expanded on start' }
      }
    },
    onSelect: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Callback fired when the active item changes.' }
      }
    },
    flush: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Renders accordion edge-to-edge with its parent container' }
      }
    },
    alwaysOpen: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Allow accordion items to stay open when another item is opened' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const BasicAccordion: Story = {
  args: {
    defaultActiveKey: '0',
    children: 
    <>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
    </>
  },
}
export const FullyCollapsedState: Story = {
  args: {
    children: 
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </>
  },
}
export const Flush: Story = {
  args: {
    flush: true,
    children: 
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </>
  },
}
export const AlwaysOpen: Story = {
  args: {
    defaultActiveKey: ['0'],
    alwaysOpen: true,
    children: 
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </>
  },
}
export const CustomButtonToggle: Story = {
  args: {
    defaultActiveKey: '0',
    children: 
    <>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  },
}