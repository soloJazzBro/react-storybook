import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Button from './Button';
import Badge from '../Badge';
import { IconContext } from "react-icons";
import { TfiPlus } from 'react-icons/tfi'
const variants = [
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
  title: 'Components/Button',
  decorators: [jsxDecorator],
  component: Button,
  tags: ['autodocs'],
  argTypes: { 
    variant: {
      options: variants,
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'One or more button variant combinations.' },
        defaultValue: { summary: 'primary' } 
      },
    },
    onClick: {
      control: {
        type: 'null'
      },
      table: {
        type: { summary: 'Callback fired when the button is clicked.' }
      },
    },
    size: {
      options: ['sm', 'lg', undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Specifies a large or small button.' }
      },
    },
    active: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Manually set the visual state of the button to :active' },
        defaultValue: { summary: 'false' } 
      }
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'Disables the Button, preventing mouse events, even if the underlying component is an <a> element.' },
        defaultValue: { summary: 'false' } 
      }
    },
    href: {
      control: { type: 'text' },
      table: {
        type: { summary: 'Providing a href will render an <a> element, styled as a button.' }
      }
    },
    type: {
      options: ['button', 'reset', 'submit', undefined],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'Defines HTML button type attribute.' },
        defaultValue: { summary: 'button' } 
      },
    },
    as: {
      control: { type: 'text' },
      table: {
        type: { summary: 'You can use a custom element type for this component.' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;
export const BasicButton: Story = {
  args: {
    onClick: () => { alert('onClick works!') },
    variant: 'primary', 
    children: 'Primary'
  }
}
export const TagLink: Story = {
  args: {
    children: 'Link',
    href: '#', 
  }
}
/*
export const TagInput: Story = {
  args: {
    children: 'Input',
    value: 'Input',
    as: 'input', 
    type: 'button',
  }
}
export const TagSubmit: Story = {
  args: {
    children: 'Submit',
    value: 'Submit',
    as: 'input', 
    type: 'submit',
  }
}
export const TagReset: Story = {
  args: {
    children: 'Reset',
    value: 'Reset',
    as: 'input', 
    type: 'reset'
  }
}
*/
export const ButtonLarge: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  }
}
export const ButtonSmall: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  }
}
export const ButtonActive: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'lg',
    active: true,
  }
}
export const ButtonDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: true,
    children: 'Primary Button'
  }
}
export const ButtonIcon: Story = {
  args: {
    variant: 'primary',
    children: 
      <>
        <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
          <TfiPlus/>
        </IconContext.Provider>
      </>
  }
}
export const ButtonIconText: Story = {
  args: {
    variant: 'primary',
    children: 
      <>
        <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
          <TfiPlus/>
        </IconContext.Provider> 
        &nbsp;Primary Button
      </>
  }
}
export const ButtonOutlineIcon: Story = {
  args: {
    variant: 'outline-primary',
    children: 
      <>
        <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
          <TfiPlus/>
        </IconContext.Provider>
      </>
  }
}
export const ButtonOutlineIconText: Story = {
  args: {
    variant: 'outline-primary',
    children: 
      <>
        <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
          <TfiPlus/>
        </IconContext.Provider> 
        &nbsp;Primary Button
      </>
  }
}
export const ButtonWithBadge: Story = {
  args: {
    children: 
      <>
        Profile <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </>
  }
}