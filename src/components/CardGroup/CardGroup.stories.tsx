import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import CardGroup from './CardGroup';
import Card from '../Card';

const meta = {
  title: 'Components/Card/CardGroup',
  decorators: [jsxDecorator],
  component: CardGroup,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'div' } 
      }
    },
    children: {
      table: {
        disable: true
      }
    },
  },
} satisfies Meta<typeof CardGroup>;

export default meta;

type Story = StoryObj<typeof CardGroup>;

export const BasicCardGroup: Story = {
  args: {
    children: 
      <>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="./310x160.svg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="./310x160.svg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="./310x160.svg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </>
  },
}
