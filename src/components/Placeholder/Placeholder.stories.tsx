import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Container from '../Container';
import Button from '../Button';
import Card from '../Card';
import Placeholder from './Placeholder';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { MdInfoOutline } from 'react-icons/md'
import Alert from '../Alert';

const meta = {
  title: 'Components/Placeholders',
  decorators: [jsxDecorator],
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

function SourceCode({...props}) {
  const value = props.value;
  return (
    <Form style={{width: '50%'}}>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} defaultValue={value} />
      </Form.Group>
    </Form>
  );
}

function CardExample() {
  return (
    <div className="d-flex">
      <Card style={{ width: '18rem', marginRight: '20px' }}>
        <Card.Img variant="top" src="./286x180.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./286x180.svg" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

const cardExample = `import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;`;

function BasicExample() {
  return (
    <>
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" />
    </>
  );
}

const basicExample = `import Placeholder from 'react-bootstrap/Placeholder';

function BasicExample() {
  return (
    <>
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" />
    </>
  );
}

export default BasicExample;`;

function Icon() {
  return (
    <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
      <MdInfoOutline/>&nbsp;Info
    </IconContext.Provider> 
  );
}

function WidthExample() {
  return (
    <>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
    </>
  );
}

const widthExample = `import Placeholder from 'react-bootstrap/Placeholder';

function WidthExample() {
  return (
    <>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
    </>
  );
}

export default WidthExample;`;

function ColorExample() {
  return (
    <>
      <Placeholder xs={12} />
      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
    </>
  );
}

const colorExample = `import Placeholder from 'react-bootstrap/Placeholder';

function ColorExample() {
  return (
    <>
      <Placeholder xs={12} />

      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
    </>
  );
}

export default ColorExample;`;

function SizeExample() {
  return (
    <>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </>
  );
}

const sizeExample = `import Placeholder from 'react-bootstrap/Placeholder';

function SizeExample() {
  return (
    <>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </>
  );
}

export default SizeExample;`;

function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

const animationExample = `import Placeholder from 'react-bootstrap/Placeholder';

function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default AnimationExample;`;

export const Overview: Story = {
  args: {
    children: 
    <>
      <h1>Placeholders</h1>
      <p className="lead">Use loading placeholders for your components or pages to indicate something may still be loading.</p>
      <h2>About</h2>
      <p>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
      <h2>Example</h2>
      <p>In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.</p>
      <CardExample/>
      <br/>
      <SourceCode value={cardExample}/>
      <h2>How it works</h2>
      <p>Create placeholders with the <code>Placeholder</code> component and a grid column prop (e.g., <code>xs={6}</code>) to set the <code>width</code>. They can replace the text inside an element or be added to an existing component via the <code>as</code> prop.</p>
      <p>Additional styling is applied to <code>PlaceholderButton</code>s via <code>::before</code> to ensure the <code>height</code> is respected. You may extend this pattern for other situations as needed, or add a <code>&amp;nbsp;</code> within the element to reflect the height when actual text is rendered in its place.</p>     
      <BasicExample/>
      <br/>
      <br/>
      <SourceCode value={basicExample}/>
      <Alert variant="primary" style={{width: '50%'}}>
          <Alert.Heading>
            <Icon/>
          </Alert.Heading>
          <p>The use of <code>aria-hidden="true"</code> only indicates that the element should be hidden to screen readers. The <em>loading</em> behaviour of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to <em>swap</em> the state of the placeholder and inform AT users of the update.</p>
      </Alert>
      <h2>Width</h2>
      <p>You can change the <code>width</code> through grid column classes, width utilities, or inline styles.</p>
      <WidthExample/>
      <br/>
      <br/>
      <SourceCode value={widthExample}/>
      <h2>Color</h2>
      <p>By default, the <code>Placeholder</code> uses <code>currentColor</code>. This can be overridden with a custom color or utility class.</p>
      <ColorExample/>
      <br/>
      <br/>
      <SourceCode value={colorExample}/>
      <h2>Sizing</h2>
      <p>The size of <code>Placeholder</code>s are based on the typographic style of the parent element. Customize them with sizing props: <code>lg</code>, <code>sm</code>, or <code>xs</code>.</p>
      <SizeExample/>
      <br/>
      <br/>
      <SourceCode value={sizeExample}/>
      <h2>Animation</h2>
      <p>Animate placeholders by setting the prop <code>animation</code> to <code>glow</code> or <code>wave</code> to better convey the perception of something being <em>actively</em> loaded.</p>
      <AnimationExample/>
      <br/>
      <SourceCode value={animationExample}/>
    </>
  },
}

export const API: Story = {
  args: {
    children: 
    <>
      <h2>Placeholder</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'placeholder'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">animation </td><td className="font-monospace"><div><code>'glow'</code><span> | </span><code>'wave'</code></div></td><td></td><td><span>Changes the animation of the placeholder.</span></td></tr><tr><td className="font-monospace">bg </td><td className="font-monospace"><div><code>'primary'</code><span> | </span><code>'secondary'</code><span> | </span><code>'success'</code><span> | </span><code>'danger'</code><span> | </span><code>'warning'</code><span> | </span><code>'info'</code><span> | </span><code>'light'</code><span> | </span><code>'dark'</code></div></td><td></td><td><span>Change the background color of the placeholder.</span></td></tr><tr><td className="font-monospace">size </td><td className="font-monospace"><div><code>'xs'</code><span> | </span><code>'sm'</code><span> | </span><code>'lg'</code></div></td><td></td><td><span>Component size variations.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div></div></td><td><code>'span'</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
      <h2>PlaceholderButton</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'placeholder'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">animation </td><td className="font-monospace"><div><code>'glow'</code><span> | </span><code>'wave'</code></div></td><td></td><td><span>Changes the animation of the placeholder.</span></td></tr><tr><td className="font-monospace">size </td><td className="font-monospace"><div><code>'xs'</code><span> | </span><code>'sm'</code><span> | </span><code>'lg'</code></div></td><td></td><td><span>Component size variations.</span></td></tr><tr><td className="font-monospace">variant </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Button variant.</span></td></tr></tbody></table>
    </>
  },
}