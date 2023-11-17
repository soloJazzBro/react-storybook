import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import PROGRESSBAR from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  decorators: [jsxDecorator],
  component: PROGRESSBAR,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      table: {
        type: { summary: 'Minimum value progress can begin from' }
      }
    },
    now: {
      control: { type: 'number' },
      table: {
        type: { summary: 'Current value of progress' }
      }
    },
    max: {
      control: { type: 'number' },
      table: {
        type: { summary: 'Maximum value progress can reach' }
      }
    },
    label: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Show label that represents visual percentage. EG. 60%' }
      }
    },
    visuallyHidden: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Hides the label visually.' }
      }
    },
    striped: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Uses a gradient to create a striped effect.' }
      }
    },
    animated: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Animates the stripes from right to left' }
      }
    },
    variant: {
      options: ['success', 'danger', 'warning', 'info', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'Sets the background class of the progress bar.' }
      }
    },
    children: {
      control: { type: 'null' },
      table: {
        type: { summary: 'Child elements (only allows elements of type)' }
      }
    },
  },
} satisfies Meta<typeof PROGRESSBAR>;

export default meta;

type Story = StoryObj<typeof PROGRESSBAR>;

export const ProgressBar: Story = {
  args: {
    now: 60
  },
}
const now = 60;
export const WithLabel: Story = {
  args: {
    now: now,
    label: `${now}%`
  },
}
export const ScreenreaderOnlyLabel: Story = {
  args: {
    now: now,
    visuallyHidden: true
  },
}
export const ContextualAlternatives: Story = {
  args: {
    now: now,
    variant: 'success'
  },
}
export const Striped: Story = {
  args: {
    now: now,
    striped: true
  },
}
export const Animated: Story = {
  args: {
    now: now,
    animated: true
  },
}
/*
export const Stacked: Story = {
  args: {
    children: 
    <>
      <PROGRESSBAR striped variant="success" now={35} key={1} />
      <PROGRESSBAR variant="warning" now={20} key={2} />
      <PROGRESSBAR striped variant="danger" now={10} key={3} />
    </>
  },
}
*/