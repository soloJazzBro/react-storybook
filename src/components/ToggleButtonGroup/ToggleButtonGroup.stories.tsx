import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import ToggleButtonGroup from './ToggleButtonGroup';
import Container from '../Container';
import ToggleButton from '../ToggleButton';
import { SetStateAction, useState } from 'react';
import Form from 'react-bootstrap/Form';

function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val: SetStateAction<number[]>) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function ToggleButtonGroupControlledCode() {
  const sourceCode = `import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function ToggleButtonGroupUncontrolled() {
  return (
    <>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
          Checkbox 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
          Checkbox 2
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
          Checkbox 3 (pre-checked)
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleButtonGroupUncontrolled;`;
  return (
    <Form style={{width: '50%'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} defaultValue={sourceCode} />
      </Form.Group>
    </Form>
  );
}

function ToggleButtonGroupUncontrolled() {
  return (
    <>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
          Checkbox 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
          Checkbox 2
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
          Checkbox 3 (pre-checked)
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

function ToggleButtonGroupUncontrolledCode() {
  const sourceCode = `import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * handleChange from ToggleButtonGroup
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonGroupControlled;`;
  return (
    <Form style={{width: '50%'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Control as="textarea" rows={5} defaultValue={sourceCode} />
      </Form.Group>
    </Form>
  );
}

const meta = {
  title: 'Components/Button/ToggleButtonGroup',
  decorators: [jsxDecorator],
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;
export const Overview: Story = {
  args: {
    children:
      <>
        <h1>ToggleButtonGroup</h1>
        <br/>
        <h2>Uncontrolled</h2>
        <br />
        <ToggleButtonGroupUncontrolled />
        <br />
        <br />
        <ToggleButtonGroupControlledCode/>
        <br />
        <h2>Controlled</h2>
        <br />
        <ToggleButtonGroupControlled />
        <br />
        <br />
        <ToggleButtonGroupUncontrolledCode />
      </>
  }
}

export const API: Story = {
  args: {
    children:
      <>
      <h2>ToggleButtonGroup</h2>
      <br/>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">name </td><td className="font-monospace"><div>string</div></td><td></td><td><div><p>An HTML <code>&lt;input&gt;</code> name for each child button.</p><p><strong>Required if <code>type</code> is set to <code>'radio'</code></strong></p></div></td></tr><tr><td className="font-monospace">value </td><td className="font-monospace"><div>any</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controlled by: <code>onChange</code>, initial prop: <code>defaultValue</code></span></em></small></div><span>The value, or array of values, of the active (pressed) buttons</span></td></tr><tr><td className="font-monospace">onChange </td><td className="font-monospace"><div>func</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controls <code>value</code></span></em></small></div><p>Callback fired when a button is pressed, depending on whether the <code>type</code>
is <code>'radio'</code> or <code>'checkbox'</code>, <code>onChange</code> will be called with the value or
array of active values</p></td></tr><tr><td className="font-monospace">type <sup className="text-danger">Required</sup></td><td className="font-monospace"><div><code>'checkbox'</code><span> | </span><code>'radio'</code></div></td><td></td><td><p>The input <code>type</code> of the rendered buttons, determines the toggle behavior
of the buttons</p></td></tr><tr><td className="font-monospace">size </td><td className="font-monospace"><div><code>'sm'</code><span> | </span><code>'lg'</code></div></td><td></td><td><span>Sets the size for all Buttons in the group.</span></td></tr><tr><td className="font-monospace">vertical </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Make the set of Buttons appear vertically stacked.</span></td></tr></tbody></table>
      </>
  }
}