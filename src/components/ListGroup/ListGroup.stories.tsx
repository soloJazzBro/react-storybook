import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import ListGroup from './ListGroup';
import Badge from '../Badge';

const horizontal = [true, 'sm', 'md', 'lg', 'xl', 'xxl'];
const variant = [undefined, 'flush']
const meta = {
  title: 'Components/ListGroup',
  decorators: [jsxDecorator],
  component: ListGroup,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' }
      }
    },
    variant: {
      options: variant,
      control: { type: 'select' },
      table: {
        type: { summary: 'Adds a variant to the list-group' }
      }
    },
    horizontal: {
      options: horizontal,
      control: { type: 'select' },
      table: {
        type: { summary: 'Changes the flow of the list group items from vertical to horizontal. A value of null (the default) sets it to vertical for all breakpoints; Just including the prop sets it for all breakpoints, while {sm|md|lg|xl|xxl} makes the list group horizontal starting at that breakpoint’s min-width.' }
      }
    },
    numbered: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Generate numbered list items.' }
      }
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
    }
  },
} satisfies Meta<typeof ListGroup>;

export default meta;

type Story = StoryObj<typeof ListGroup>;

export const BasicListGroup: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </>
  },
}
export const ActiveItems: Story = {
  args: {
    as: 'ul',
    style: { width: '18rem' },
    children:
      <>
        <ListGroup.Item as="li" active>
        Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </> 
  },
}
export const DisabledItems: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </>
  },
}

const alertClicked = () => {
  alert('You clicked the third ListGroup.Item');
};

export const ActionableItems: Story = {
  args: {
    style: { width: '18rem' },
    defaultActiveKey: '#link1',
    children: 
      <>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" disabled>
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          This one is a button
        </ListGroup.Item>
      </>
  },
}
export const Flush: Story = {
  args: {
    style: { width: '18rem' },
    variant: 'flush',
    children: 
      <>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </>
  },
}
export const Numbered: Story = {
  args: {
    as: 'ol',
    style: { width: '18rem' },
    numbered: true,
    children: 
      <>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </>
  },
}
export const CustomContent: Story = {
  args: {
    as: 'ol',
    numbered: true,
    style: { width: '18rem' },
    children: 
      <>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </>
  },
}
export const ContextualClasses: Story = {
  args: {
    style: { width: '18rem' },
    children: 
      <>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
        <ListGroup.Item variant="info">Info</ListGroup.Item>
        <ListGroup.Item variant="light">Light</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      </>
  },
}