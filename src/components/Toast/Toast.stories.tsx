import React, { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Toast from './Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from '../Container';
import Form from 'react-bootstrap/Form';
import Row from '../Row';
import Col from '../Col';
import Button from '../Button';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  undefined
];

const meta = {
  title: 'Components/Toast',
  decorators: [jsxDecorator],
  component: Container,
  /*
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle animation' }
      }
    },
    autohide: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle autohide' }
      }
    },
    delay: {
      control: { type: 'number' },
      table: {
        type: { summary: 'set delay' }
      }
    },
    onClose: {
      table: {
        disable: true
      }
    },
    show: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle show' }
      }
    },
    transition: {
      table: {
        disable: true
      }
    },
    bg: {
      options: variants,
      control: { type: 'select' },
      table: {
        type: { summary: 'select bg' }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  */
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

function SourceCode({ ...props }) {
  const value = props.value;
  return (
    <Form style={{width: '50%'}}>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} defaultValue={value} />
      </Form.Group>
    </Form>
  );
}

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="./10x10.svg" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}

const basicExample = `import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}

export default BasicExample;`;

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

const dismissibleExample = `import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;`;

function StackingExample() {
  return (
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Header>
          <img src="./10x10.svg" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img src="./10x10.svg" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

const stackingExample = `import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function StackingExample() {
  return (
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default StackingExample;`;

function PlacementExample() {
  const [position, setPosition] = useState('top-start');

  return (
    <>
      <div className="mb-3">
        <label htmlFor="selectToastPlacement">Toast position</label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
          style={{width: '25%'}}
        >
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer
          className="p-3"
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="./10x10.svg"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

const placementExample = `import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PlacementExample() {
  const [position, setPosition] = useState('top-start');

  return (
    <>
      <div className="mb-3">
        <label htmlFor="selectToastPlacement">Toast position</label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer
          className="p-3"
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

export default PlacementExample;`;

function PlacementMultiExample() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

const placementMultiExample = `import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PlacementMultiExample() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default PlacementMultiExample;`;

function AutohideExample() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
}

const autohideExample = `import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AutohideExample() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
}

export default AutohideExample;`;

function ContextualExample() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="./10x10.svg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

const contextualExample = `import Toast from 'react-bootstrap/Toast';

function ContextualExample() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ContextualExample;`;

export const Overview: Story = {
  args: {
    children: 
    <>
      <h1>Toasts</h1>
      <p className="lead">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
      <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>
      <h2>Examples</h2>
      <h3>Basic</h3>
      <p>To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use display: flex, allowing easy alignment of content thanks to our margin and flexbox utilities.</p>
      <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
      <BasicExample/>
      <br/>
      <SourceCode value={basicExample}/>
      <br/>
      <h3>Dissmissible</h3>
      <DismissibleExample/>
      <br/>
      <SourceCode value={dismissibleExample}/>
      <br/>
      <h3>Stacking</h3>
      <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>
      <StackingExample/>
      <br/>
      <SourceCode value={stackingExample}/>
      <br/>
      <h3>Placement</h3>
      <p>Place toasts by setting a <code>position</code> in a <code>ToastContainer</code>. The top right is often used for notifications, as is the top middle.</p>
      <PlacementExample/>
      <br/>
      <SourceCode value={placementExample}/>
      <br/>
      <p>For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
      <PlacementMultiExample/>
      <br/>
      <SourceCode value={placementMultiExample}/>
      <br/>
      <h3>Autohide</h3>
      <p>A Toast can also automatically hide after X milliseconds using the <code>autohide</code> prop with the <code>delay</code> prop to specify the delay. To open the toast, manually change the show property.</p>
      <AutohideExample/>
      <br/>
      <SourceCode value={autohideExample}/>
      <br/>
      <h3>Contexual variations</h3>
      <p>Add any of the below mentioned modifier classes to change the appearance of a toast.</p>
      <ContextualExample/>
      <br/>
      <br/>
      <SourceCode value={contextualExample}/>
      <br/>
    </>
  },
}

export const API: Story = {
  args: {
    children: 
    <>
      <h2>Toast</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'toast'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">animation </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>Apply a CSS fade transition to the toast</span></td></tr><tr><td className="font-monospace">autohide </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Auto hide the toast</span></td></tr><tr><td className="font-monospace">delay </td><td className="font-monospace"><div>number</div></td><td><code>5000</code></td><td><span>Delay hiding the toast (ms)</span></td></tr><tr><td className="font-monospace">onClose </td><td className="font-monospace"><div>func</div></td><td></td><td><span>A Callback fired when the close button is clicked.</span></td></tr><tr><td className="font-monospace">show </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>When <code>true</code> The modal will show itself.</span></td></tr><tr><td className="font-monospace">transition </td><td className="font-monospace"><div>elementType</div></td><td><code>ToastFade</code></td><td><span>A <code>react-transition-group</code> Transition component used to animate the Toast on dismissal.</span></td></tr><tr><td className="font-monospace">bg </td><td className="font-monospace"><div><code>'primary'</code><span> | </span><code>'secondary'</code><span> | </span><code>'success'</code><span> | </span><code>'danger'</code><span> | </span><code>'warning'</code><span> | </span><code>'info'</code><span> | </span><code>'dark'</code><span> | </span><code>'light'</code></div></td><td></td><td><span>Sets Toast background</span></td></tr></tbody></table>
      <h2>ToastHeader</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">closeLabel </td><td className="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><p>Provides an accessible label for the close
button. It is used for Assistive Technology when the label text is not
readable.</p></td></tr><tr><td className="font-monospace">closeVariant </td><td className="font-monospace"><div><code>'white'</code></div></td><td></td><td><span>Sets the variant for close button.</span></td></tr><tr><td className="font-monospace">closeButton </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>Specify whether the Component should contain a close button</span></td></tr></tbody></table>
      <h2>ToastBody</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'toast-body'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
      <h2>ToastContainer</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'toast-container'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">position </td><td className="font-monospace"><div><code>'top-start'</code><span> | </span><code>'top-center'</code><span> | </span><code>'top-end'</code><span> | </span><code>'middle-start'</code><span> | </span><code>'middle-center'</code><span> | </span><code>'middle-end'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'bottom-center'</code><span> | </span><code>'bottom-end'</code></div></td><td></td><td><span>Where the toasts will be placed within the container.</span></td></tr><tr><td className="font-monospace">containerPosition </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Specify the positioning method for the container.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div></div></td><td><code>'div'</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
    </>
  },
}