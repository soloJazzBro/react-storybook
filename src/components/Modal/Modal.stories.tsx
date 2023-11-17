import React, { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Modal from './Modal';
import Button from '../Button';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { MdInfoOutline } from 'react-icons/md'
import Alert from '../Alert';

const meta = {
  title: 'Components/Modal',
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

function Icon() {
  return (
    <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
      <MdInfoOutline/>&nbsp;Additional Import Options
    </IconContext.Provider> 
  );
}

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog style={{ float: 'left', width: '-webkit-fill-available'}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

const staticExample = `import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;`;

function LiveDemoExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const liveDemoExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;`;

function StaticBackdropExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const staticBackdropExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;`;

function WithoutAnimationExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const withoutAnimationExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;`;

function MyVerticallyCenteredModal({...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const myVerticallyCenteredModal = `import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);`;

function MydModalWithGrid({...props}) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App2() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

const mydModalWithGrid = `import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

render(<App />);`;

function FocusExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const focusExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;`;

function SizeExample() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

const sizeExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

export default Example;`;

function FullscreenExample() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint: string | boolean | ((prevState: boolean) => boolean)) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

const fullscreenExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && below v.split('-')[0]}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default Example;`;

function CssExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

const cssExample = `import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;`;

export const Overview: Story = {
  args: {
    children: 
      <>
        <h1>Modals</h1>
        <p className="lead">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
        <h2>Overview</h2>
        <ul className=""><li>Modals are positioned over everything else in the document and remove scroll from the
<code>&lt;body&gt;</code> so that modal content scrolls instead.</li><li>Modals are <em>unmounted</em> when closed.</li><li>Bootstrap only supports <strong>one</strong> modal window at a time. Nested modals aren't supported,
but if you really need them, the underlying <code>@restart/ui</code> library can support them if
you're willing.</li><li>Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal,
and not the rest of the page.</li><li>Unlike vanilla Bootstrap, <code>autoFocus</code> works in Modals because React handles the implementation.</li></ul>
        <h2>Examples</h2>
        <br/>
        <h3>Static Markup</h3>
        <p>Below is a <em>static</em> modal dialog (without the positioning) to demonstrate the look and feel of the Modal.</p>
        <StaticExample/>
        <br/>
        <SourceCode value={staticExample}/>
        <br/>
        <h3>Live demo</h3>
        <p>A modal with header, body, and set of actions in the footer. Use <code>&lt;Modal/&gt;</code> in combination with other components to show or hide your Modal. The <code>&lt;Modal/&gt;</code> Component comes with a few convenient "sub components": <code>&lt;Modal.Header/&gt;</code>, <code>&lt;Modal.Title/&gt;</code>, <code>&lt;Modal.Body/&gt;</code>, and <code>&lt;Modal.Footer/&gt;</code>, which you can use to build the Modal content.</p>
        <LiveDemoExample/>
        <br/>
        <br/>
        <SourceCode value={liveDemoExample}/>
        <br/>
        <h3>Static backdrop</h3>
        <p>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
        <StaticBackdropExample/>
        <br/>
        <br/>
        <SourceCode value={staticBackdropExample}/>
        <br/>
        <h3>Without Animation</h3>
        <p>A Modal can also be without an animation. For that set the <code>animation</code> prop to <code>false</code>.</p>
        <WithoutAnimationExample/>
        <br/>
        <br/>
        <SourceCode value={withoutAnimationExample}/>
        <br/>
        <Alert variant='primary' style={{width: '50%'}}>
          <Alert.Heading><Icon/></Alert.Heading>  
          <p>The Modal Header, Title, Body, and Footer components are available as static properties the <code>&lt;Modal/&gt;</code> component, but you can also, import them directly like: <code>require("react-bootstrap/ModalHeader")</code>.</p>
        </Alert>   
        <br/>
        <h3>Vertically centered</h3>     
        <p>You can vertically center a modal by passing the <code>centered</code> prop.</p>
        <App/>
        <br/>
        <br/>
        <SourceCode value={myVerticallyCenteredModal}/>
        <br/>
        <h3>Using the grid</h3>
        <p>You can use grid layouts within a model using regular grid components inside the modal content.</p>
        <App2/>
        <br/>
        <br/>
        <SourceCode value={mydModalWithGrid}/>
        <h3>Focus on specific element</h3>
        <p>You can focus on an element inside the modal using <code>autoFocus</code> attribute on the element.</p>
        <FocusExample/>
        <br/>
        <br/>
        <SourceCode value={focusExample}/>
        <h3>Optional Sizes</h3>
        <p>You can specify a Bootstrap large or small modal by using the <code>size</code> prop.</p>
        <SizeExample/>
        <br/>
        <br/>
        <SourceCode value={sizeExample}/>
        <h3>Fullscreen Modal</h3>
        <p>You can use the <code>fullscreen</code> prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen <strong>below</strong> the breakpoint size.</p>
        <FullscreenExample/>
        <br/>
        <br/>
        <SourceCode value={fullscreenExample}/>
        <h3>Sizing modals using custom CSS</h3>
        <p>You can apply custom css to the modal dialog div using the <code>dialogClassName</code> prop. Example is using a custom css class with width set to 90%.</p>
        <CssExample/>
        <br/>
        <br/>
        <SourceCode value={cssExample}/>
      </>
  },
}

export const API: Story = {
  args: {
    children: 
      <>
        <h2>Modal</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'modal'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">size </td><td className="font-monospace"><div><code>'sm'</code><span> | </span><code>'lg'</code><span> | </span><code>'xl'</code></div></td><td></td><td><p>Render a large, extra large or small modal.
When not provided, the modal is rendered with medium (default) size.</p></td></tr><tr><td className="font-monospace">fullscreen </td><td className="font-monospace"><div><code>true</code><span> | </span><code>'sm-down'</code><span> | </span><code>'md-down'</code><span> | </span><code>'lg-down'</code><span> | </span><code>'xl-down'</code><span> | </span><code>'xxl-down'</code></div></td><td></td><td><p>Renders a fullscreen modal. Specifying a breakpoint will render the modal
as fullscreen <strong>below</strong> the breakpoint size.</p></td></tr><tr><td className="font-monospace">centered </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>vertically center the Dialog in the window</span></td></tr><tr><td className="font-monospace">backdrop </td><td className="font-monospace"><div><code>'static'</code><span> | </span><code>true</code><span> | </span><code>false</code></div></td><td><code>true</code></td><td><p>Include a backdrop component. Specify 'static' for a backdrop that doesn't
trigger an "onHide" when clicked.</p></td></tr><tr><td className="font-monospace">backdropClassName </td><td className="font-monospace"><div>string</div></td><td></td><td><p>Add an optional extra class name to .modal-backdrop
It could end up looking like className="modal-backdrop foo-modal-backdrop in".</p></td></tr><tr><td className="font-monospace">keyboard </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>Close the modal when escape key is pressed</span></td></tr><tr><td className="font-monospace">scrollable </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.</span></td></tr><tr><td className="font-monospace">animation </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><span>Open and close the Modal with a slide and fade animation.</span></td></tr><tr><td className="font-monospace">dialogClassName </td><td className="font-monospace"><div>string</div></td><td></td><td><span>A css class to apply to the Modal dialog DOM node.</span></td></tr><tr><td className="font-monospace">contentClassName </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Add an optional extra class name to .modal-content</span></td></tr><tr><td className="font-monospace">dialogAs </td><td className="font-monospace"><div>elementType</div></td><td><code>ModalDialog</code></td><td><p>A Component type that provides the modal content Markup. This is a useful
prop when you want to use your own styles and markup to create a custom
modal component.</p></td></tr><tr><td className="font-monospace">autoFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The modal will automatically shift focus to itself when it
opens, and replace it to the last focused element when it closes.
Generally this should never be set to false as it makes the Modal less
accessible to assistive technologies, like screen-readers.</p></td></tr><tr><td className="font-monospace">enforceFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The modal will prevent focus from leaving the Modal while
open. Consider leaving the default value here, as it is necessary to make
the Modal work well with assistive technologies, such as screen readers.</p></td></tr><tr><td className="font-monospace">restoreFocus </td><td className="font-monospace"><div>bool</div></td><td><code>true</code></td><td><p>When <code>true</code> The modal will restore focus to previously focused element once
modal is hidden</p></td></tr><tr><td className="font-monospace">restoreFocusOptions </td><td className="font-monospace"><div>shape</div></td><td></td><td><span>Options passed to focus function when <code>restoreFocus</code> is set to <code>true</code></span></td></tr><tr><td className="font-monospace">show </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>When <code>true</code> The modal will show itself.</span></td></tr><tr><td className="font-monospace">onShow </td><td className="font-monospace"><div>func</div></td><td></td><td><span>A callback fired when the Modal is opening.</span></td></tr><tr><td className="font-monospace">onHide </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A callback fired when the header closeButton or non-static backdrop is
clicked. Required if either are specified.</p></td></tr><tr><td className="font-monospace">onEscapeKeyDown </td><td className="font-monospace"><div>func</div></td><td></td><td><span>A callback fired when the escape key, if specified in <code>keyboard</code>, is pressed.</span></td></tr><tr><td className="font-monospace">onEnter </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired before the Modal transitions in</span></td></tr><tr><td className="font-monospace">onEntering </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the Modal begins to transition in</span></td></tr><tr><td className="font-monospace">onEntered </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the Modal finishes transitioning in</span></td></tr><tr><td className="font-monospace">onExit </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired right before the Modal transitions out</span></td></tr><tr><td className="font-monospace">onExiting </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the Modal begins to transition out</span></td></tr><tr><td className="font-monospace">onExited </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the Modal finishes transitioning out</span></td></tr><tr><td className="font-monospace">manager </td><td className="font-monospace"><div>object</div></td><td></td><td><p>A ModalManager instance used to track and manage the state of open
Modals. Useful when customizing how modals interact within a container</p></td></tr><tr><td className="font-monospace">aria-labelledby </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr><tr><td className="font-monospace">aria-describedby </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr><tr><td className="font-monospace">aria-label </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr></tbody></table>
        <h2>ModalDialog</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'modal'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">contentClassName </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr><tr><td className="font-monospace">size </td><td className="font-monospace"><div><code>'sm'</code><span> | </span><code>'lg'</code><span> | </span><code>'xl'</code></div></td><td></td><td><span>Render a large, extra large or small modal.</span></td></tr><tr><td className="font-monospace">fullscreen </td><td className="font-monospace"><div><code>true</code><span> | </span><code>'sm-down'</code><span> | </span><code>'md-down'</code><span> | </span><code>'lg-down'</code><span> | </span><code>'xl-down'</code><span> | </span><code>'xxl-down'</code></div></td><td></td><td><p>Renders a fullscreen modal. Specifying a breakpoint will render the modal
as fullscreen <strong>below</strong> the breakpoint size.</p></td></tr><tr><td className="font-monospace">centered </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Specify whether the Component should be vertically centered</span></td></tr><tr><td className="font-monospace">scrollable </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.</span></td></tr></tbody></table>
        <h2>ModalHeader</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'modal-header'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">closeLabel </td><td className="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><p>Provides an accessible label for the close
button. It is used for Assistive Technology when the label text is not
readable.</p></td></tr><tr><td className="font-monospace">closeVariant </td><td className="font-monospace"><div><code>'white'</code></div></td><td></td><td><span>Sets the variant for close button.</span></td></tr><tr><td className="font-monospace">closeButton </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Specify whether the Component should contain a close button</span></td></tr><tr><td className="font-monospace">onHide </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A Callback fired when the close button is clicked. If used directly inside
a Modal component, the onHide will automatically be propagated up to the
parent Modal <code>onHide</code>.</p></td></tr></tbody></table>
        <h2>ModalTitle</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'modal-title'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>DivStyledAsH4</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
        <h2>ModalBody</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'modal-body'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
        <h2>ModalFooter</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'modal-footer'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
      </>
  },
}