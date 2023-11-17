import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Button from '../Button';
import ListGroup from "../ListGroup";
import Card from './Card';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const meta = {
  title: 'Components/Card',
  decorators: [jsxDecorator],
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets card background' }
      }
    },
    text: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets card text color' }
      }
    },
    border: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets card border color' }
      }
    },
    body: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'When this prop is set, it creates a Card with a Card.Body inside passing the children directly to it' },
        defaultValue: { summary: 'false' } 
      },
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' },
        defaultValue: { summary: 'div' } 
      },
    },
    style: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  args: {
    style: { width: '18rem' },
    children:
      <>
        <Card.Img variant="top" src="./286x180.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </>
  },
}

export const BodyOnly: Story = {
  args: {
    children:
      <>
        <Card.Body>This is some text within a card body.</Card.Body>
      </>
  },
}

export const TitleTextAndLinks: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </>
  },
}

export const CardWithListGroup: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
  },
}

export const CardWithListGroupHeader: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
  },
}

export const KitchenSink: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <Card.Img variant="top" src="./image-cap.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </>
  },
}
export const Header: Story = {
  args: {
    children: 
      <>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </>
  },
}

export const HeaderStyled: Story = {
  args: {
    children: 
      <>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </>
  },
}

export const HeaderWithQuote: Story = {
  args: {
    children: 
      <>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </>
  },
}

export const HeaderAndFooter: Story = {
  args: {
    className: 'text-center',
    children: 
      <>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </>
  },
}

export const ImgCapTop: Story = {
  args: {
    children: 
      <>
        <Card.Img variant="top" src="./932x180.svg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </>
  },
}

export const ImgCapBottom: Story = {
  args: {
    children: 
      <>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="./932x180.svg" />
      </>
  },
}

export const ImgOverlay: Story = {
  args: {
    className: 'bg-dark text-white',
    children: 
      <>
        <Card.Img src="./932x270.svg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </>
  },
}