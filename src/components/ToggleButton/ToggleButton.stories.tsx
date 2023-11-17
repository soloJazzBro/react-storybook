import { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import ToggleButton from './ToggleButton';
import ButtonGroup from '../ButtonGroup';
import Container from '../Container';
import Form from 'react-bootstrap/Form';

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
        style={{ marginBottom: '8px' }}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

function ToggleButtonExampleCode() {
  const sourceCode = `import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={'radio-'+ idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={'radio-' + idx}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}
  
export default ToggleButtonExample;`;
  return (
    <Form style={{width: '50%'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} defaultValue={sourceCode} />
      </Form.Group>
    </Form>
  );
}

const meta = {
  title: 'Components/Button/ToggleButton',
  decorators: [jsxDecorator],
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Overview: Story = {
  args: {
    children:
      <>
        <h1>ToggleButton</h1>
        <br/>
        <h2>Checkbox/Radio</h2>
        <br />
        <p>Buttons can also be used to style <code>checkbox</code> and <code>radio</code> form elements. This is helpful when you want a toggle button that works neatly inside an HTML form.</p>
        <br />
        <ToggleButtonExample/>
        <br/>
        <br/>
        <ToggleButtonExampleCode />
        <br/>
        <p>The above handles styling, But requires manually controlling the <code>checked</code> state for each radio or checkbox in the group.</p>
        <p>For a nicer experience with checked state management use the <code>&lt;ToggleButtonGroup&gt;</code> instead of a <code>&lt;ButtonGroup&gt;</code> component. The group behaves as a form component, where the <code>value</code> is an array of the selected <code>value</code>s for a named checkbox group or the single toggled <code>value</code> in a similarly named radio group.</p>
      </>
  }
}

export const API: Story = {
  args: {
    children:
      <>
      <h2>ToggleButton</h2>
      <br/>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'btn-check'</code></td><td><span>Change the underlying component CSS base className name and modifier className names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">type </td><td className="font-monospace"><div><code>'checkbox'</code><span> | </span><code>'radio'</code></div></td><td></td><td><span>The <code>&lt;input&gt;</code> element <code>type</code></span></td></tr><tr><td className="font-monospace">name </td><td className="font-monospace"><div>string</div></td><td></td><td><p>The HTML input name, used to group like checkboxes or radio buttons together
semantically</p></td></tr><tr><td className="font-monospace">checked </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>The checked state of the input, managed by <code>&lt;ToggleButtonGroup&gt;</code> automatically</span></td></tr><tr><td className="font-monospace">disabled </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>The disabled state of both the label and input</span></td></tr><tr><td className="font-monospace">id <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td></td><td><span><code>id</code> is required for button clicks to toggle input.</span></td></tr><tr><td className="font-monospace">onChange </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A callback fired when the underlying input element changes. This is passed
directly to the <code>&lt;input&gt;</code> so shares the same signature as a native <code>onChange</code> event.</p></td></tr><tr><td className="font-monospace">value <sup className="text-danger">Required</sup></td><td className="font-monospace"><div><code>string</code><span> | </span><code>arrayOf</code><span> | </span><code>number</code></div></td><td></td><td><p>The value of the input, should be unique amongst it's siblings when nested in a
<code>ToggleButtonGroup</code>.</p></td></tr><tr><td className="font-monospace">inputRef </td><td className="font-monospace"><div><code>ReactRef</code></div></td><td></td><td><span>A ref attached to the <code>&lt;input&gt;</code> element</span></td></tr></tbody></table>
      </>
  }
}