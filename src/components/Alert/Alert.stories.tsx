import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Alert from './Alert';

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
  title: 'Components/Alert',
  decorators: [jsxDecorator],
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'The Alert visual variant' }
      }
    },
    dismissible: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert.' }
      }
    },
    show: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Controls the visual state of the Alert.' }
      }
    },
    onClose: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Callback fired when alert is closed.' }
      }
    },
    closeLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Sets the text for alert close button.' }
      }
    },
    closeVariant: {
      options: ['white', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets the variant for close button.' }
      }
    },
    transition: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Animate the alert dismissal. Defaults to using <Fade> animation or use false to disable. A custom react-transition-group Transition can also be provided.' }
      }
    },
    children: {
      table: {
        disable: true
      }
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const BasicAlert: Story = {
  args: {
    variant: 'primary',
    children: 'This is a primary alert—check it out!'
  },
}

export const AlertWithLink: Story = {
  args: {
    variant: 'secondary',
    children:
      <>
        This is a secondary alert with{' '}<Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
      </>
  },
}

export const AlertWithAdditionalContent: Story = {
  args: {
    variant: 'success',
    children:
      <>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </>
  },
}

export const DissmissibleAlert: Story = {
  args: {
    variant: 'danger',
    dismissible: true,
    onClose: () => {
    },
    children:
      <>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </>
  },
}