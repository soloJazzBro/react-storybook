import { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Offcanvas from './Offcanvas';
import Container from '../Container';
import Button from '../Button';
import Alert  from '../Alert';
import Form from 'react-bootstrap/Form';

const meta = {
  title: 'Components/Offcanvas',
  decorators: [jsxDecorator],
  component: Container,
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

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const example =`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;`;

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

      <Alert style={{width: '50%'}} variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const responsiveExample = `import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveExample;`;

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example2() {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

const offCanvasExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

render(<Example />);`;

const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  },
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample2({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example3() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample2 key={idx} {...props} />
      ))}
    </>
  );
}

const offCanvasExample2 = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  },
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

render(<Example />);`;

function Example4() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const example4 = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;`;

export const Overview: Story = {
  args: {
    children: 
      <>
        <h1>Offcanvas</h1>
        <p className="lead">Build hidden sidebars into your project for navigation, shopping carts, and more.</p>
        <h2>Examples</h2>
        <p>Offcanvas includes support for a header with a close button and an optional body class for some initial padding. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.</p>
        <h3>Basic Example</h3>
        <Example/>
        <br/>
        <br/>
        <SourceCode value={example}/>
        <br/>
        <h3>Responsive</h3>
        <p>Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual.</p>
        <ResponsiveExample/>
        <br/>
        <br/>
        <SourceCode value={responsiveExample}/>
        <h3>Placement</h3>
        <p>Offcanvas supports a few different placements:</p>
        <ul className=""><li><code>start</code> places offcanvas on the left of the viewport</li><li><code>end</code> places offcanvas on the right of the viewport</li><li><code>top</code> places offcanvas on the top of the viewport</li><li><code>bottom</code> places offcanvas on the bottom of the viewport</li></ul>
        <Example2/>
        <br/>
        <br/>
        <SourceCode value={offCanvasExample}/>
        <br/>
        <h3>Backdrop</h3>
        <p>Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scroll</code> prop to toggle <code>&lt;body&gt;</code> scrolling and the <code>backdrop</code> prop to toggle the backdrop.</p>
        <Example3/>
        <br/>
        <br/>
        <SourceCode value={offCanvasExample2}/>
        <h3>Static backdrop</h3>
        <p>When <code>backdrop</code> is set to <code>static</code>, the offcanvas will not close when clicking outside of it.</p>
        <Example4/>
        <br/>
        <br/>
        <SourceCode value={example4}/>
      </>
  },
}

export const API: Story = {
  args: {
    children: 
      <>
        <h2>Offcanvas</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'offcanvas'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">backdrop </td><td className="font-monospace"><div><code>'static'</code><span> | </span><code>true</code><span> | </span><code>false</code></div></td><td><code>true</code></td><td><p>Include a backdrop component. Specify 'static' for a backdrop that doesn't
trigger an "onHide" when clicked.</p></td></tr><tr><td className="font-monospace">backdropClassName </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Add an optional extra class name to .offcanvas-backdrop.</span></td></tr><tr><td className="font-monospace">keyboard </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>Closes the offcanvas when escape key is pressed.</span></td></tr><tr><td className="font-monospace">scroll </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Allow body scrolling while offcanvas is open.</span></td></tr><tr><td className="font-monospace">placement </td><td className="font-monospace"><div><code>'start'</code><span> | </span><code>'end'</code><span> | </span><code>'top'</code><span> | </span><code>'bottom'</code></div></td><td><code>'start'</code></td><td><span>Which side of the viewport the offcanvas will appear from.</span></td></tr><tr><td className="font-monospace">responsive </td><td className="font-monospace"><div><code>"sm"</code><span> | </span><code>"md"</code><span> | </span><code>"lg"</code><span> | </span><code>"xl"</code><span> | </span><code>"xxl"</code></div></td><td></td><td><span>Hide content outside the viewport from a specified breakpoint and down.</span></td></tr><tr><td className="font-monospace">autoFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The offcanvas will automatically shift focus to itself when it
opens, and replace it to the last focused element when it closes.
Generally this should never be set to false as it makes the offcanvas less
accessible to assistive technologies, like screen-readers.</p></td></tr><tr><td className="font-monospace">enforceFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The offcanvas will prevent focus from leaving the offcanvas while
open. Consider leaving the default value here, as it is necessary to make
the offcanvas work well with assistive technologies, such as screen readers.</p></td></tr><tr><td className="font-monospace">restoreFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The offcanvas will restore focus to previously focused element once
offcanvas is hidden</p></td></tr><tr><td className="font-monospace">restoreFocusOptions </td><td className="font-monospace"><div>shape</div></td><td></td><td><span>Options passed to focus function when <code>restoreFocus</code> is set to <code>true</code></span></td></tr><tr><td className="font-monospace">show </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>When <code>true</code> The offcanvas will show itself.</span></td></tr><tr><td className="font-monospace">onShow </td><td className="font-monospace"><div>func</div></td><td></td><td><span>A callback fired when the offcanvas is opening.</span></td></tr><tr><td className="font-monospace">onHide </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A callback fired when the header closeButton or backdrop is
clicked. Required if either are specified.</p></td></tr><tr><td className="font-monospace">onEscapeKeyDown </td><td className="font-monospace"><div>func</div></td><td></td><td><span>A callback fired when the escape key, if specified in <code>keyboard</code>, is pressed.</span></td></tr><tr><td className="font-monospace">onEnter </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired before the offcanvas transitions in</span></td></tr><tr><td className="font-monospace">onEntering </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the offcanvas begins to transition in</span></td></tr><tr><td className="font-monospace">onEntered </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the offcanvas finishes transitioning in</span></td></tr><tr><td className="font-monospace">onExit </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired right before the offcanvas transitions out</span></td></tr><tr><td className="font-monospace">onExiting </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the offcanvas begins to transition out</span></td></tr><tr><td className="font-monospace">onExited </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the offcanvas finishes transitioning out</span></td></tr><tr><td className="font-monospace">aria-labelledby </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr></tbody></table>
        <h2>OffcanvasHeader</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'offcanvas-header'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">closeLabel </td><td className="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><p>Provides an accessible label for the close
button. It is used for Assistive Technology when the label text is not
readable.</p></td></tr><tr><td className="font-monospace">closeVariant </td><td className="font-monospace"><div><code>'white'</code></div></td><td></td><td><span>Sets the variant for close button.</span></td></tr><tr><td className="font-monospace">closeButton </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Specify whether the Component should contain a close button</span></td></tr><tr><td className="font-monospace">onHide </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A Callback fired when the close button is clicked. If used directly inside
a Offcanvas component, the onHide will automatically be propagated up to the
parent Offcanvas <code>onHide</code>.</p></td></tr></tbody></table>
        <h2>OffcanvasTitle</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'offcanvas-title'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>DivStyledAsH5</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
        <h2>OffcanvasBody</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'offcanvas-body'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
      </>
  },
}