import { SetStateAction, useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Carousel from './Carousel';
import Container from '../Container';
import Form from 'react-bootstrap/Form';
import Alert from '../Alert';
import { IconContext } from "react-icons";
import { FaExclamationTriangle } from 'react-icons/fa'

const meta = {
  title: 'Components/Carousel',
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
      <FaExclamationTriangle/>&nbsp;Heads up!
    </IconContext.Provider> 
  );
}

function UncontrolledExample() {
  return (
    <Carousel style={{width: '50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide2.svg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide3.svg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const uncontrolledExample = `import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;`;

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width: '50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide2.svg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide3.svg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const controlledCarousel = `import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;`;

function CarouselFadeExample() {
  return (
    <Carousel fade style={{width: '50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide2.svg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide3.svg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const carouselFadeExample = `import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;`;

function NoTransitionExample() {
  return (
    <Carousel slide={false} style={{width: '50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide2.svg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide3.svg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const noTransitionExample = `import Carousel from 'react-bootstrap/Carousel';

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;`;

function IndividualIntervalsExample() {
  return (
    <Carousel style={{width: '50%'}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./slide2.svg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slide3.svg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const individualIntervalsExample = `import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;`;

function DarkVariantExample() {
  return (
    <Carousel variant="dark" style={{width: '50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./alt-slide1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./alt-slide2.svg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./alt-slide3.svg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const darkVariantExample = `import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;`;

export const Overview: Story = {
  args: {
    children: 
    <>
      <h1>Carousel</h1>
      <p className="lead">A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
      <h2>Example</h2>
      <p>Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</p>
      <UncontrolledExample />
      <br/>
      <SourceCode value={uncontrolledExample}/>
      <br/>
      <h2>Controlled</h2>
      <p>You can also <em>control</em> the Carousel state, via the <code>activeIndex</code> prop and <code>onSelect</code> handler.</p>
      <ControlledCarousel/>
      <br/>
      <SourceCode value={controlledCarousel}/>
      <br/>
      <h2>Crossfade</h2>
      <p>Add the <code>fade</code> prop to your carousel to animate slides with a fade transition instead of a slide.</p>
      <CarouselFadeExample/>
      <br/>
      <SourceCode value={carouselFadeExample}/>
      <br/>
      <h2>No transition animation</h2>
      <p>Set the <code>slide</code> prop to false to disable the transition animation between slides.</p>
      <NoTransitionExample/>
      <br/>
      <SourceCode value={noTransitionExample}/>
      <br/>
      <h2>Individual Item Intervals</h2>
      <p>You can specify individual intervals for each carousel item via the <code>interval</code> prop.</p>
      <IndividualIntervalsExample/>
      <br/>
      <SourceCode value={individualIntervalsExample}/>
      <br/>
      <h2>Dark variant</h2>
      <p>Add <code>variant="dark"</code> to the <code>Carousel</code> for darker controls, indicators, and captions.</p>
      <Alert variant="warning" style={{width: '50%'}}>
          <Alert.Heading>
            <Icon/>
          </Alert.Heading>
          <p>Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction of color modes. Instead of adding <code>variant="dark"</code>, set <code>data-bs-theme="dark"</code> on the root element, a parent wrapper, or the component itself.</p>
        </Alert>
      <DarkVariantExample/>
      <br/>
      <SourceCode value={darkVariantExample}/>

    </>
  },
}

export const API: Story = {
  args: {
    children: 
    <>
      <h2>Carousel</h2>
      <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'carousel'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td></td><td><span>You can use a custom element type for this component.</span></td></tr><tr><td className="font-monospace">slide </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Enables animation on the Carousel as it transitions between slides.</span></td></tr><tr><td className="font-monospace">fade </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Animates slides with a crossfade animation instead of the default slide animation</span></td></tr><tr><td className="font-monospace">controls </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Show the Carousel previous and next arrows for changing the current slide</span></td></tr><tr><td className="font-monospace">indicators </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Show a set of slide position indicators</span></td></tr><tr><td className="font-monospace">indicatorLabels </td><td className="font-monospace"><div>array</div></td><td></td><td><span>An array of labels for the indicators. Defaults to "Slide #" if not provided.</span></td></tr><tr><td className="font-monospace">activeIndex </td><td className="font-monospace"><div>number</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controlled by: <code>onSelect</code>, initial prop: <code>defaultActiveIndex</code></span></em></small></div><span>Controls the current visible slide</span></td></tr><tr><td className="font-monospace">onSelect </td><td className="font-monospace"><div>func</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controls <code>activeIndex</code></span></em></small></div><div><p>Callback fired when the active item changes.</p><pre className="codeBlockStandalone_MEMb thin-scrollbar codeBlockContainer_Ckt0 theme-code-block" ><code className="codeBlockLines_e6Vv"><code className="lang-js"></code></code></pre></div></td></tr><tr><td className="font-monospace">onSlide </td><td className="font-monospace"><div>func</div></td><td></td><td><div><p>Callback fired when a slide transition starts.</p><p></p></div></td></tr><tr><td className="font-monospace">onSlid </td><td className="font-monospace"><div>func</div></td><td></td><td><div><p>Callback fired when a slide transition ends.</p><p></p></div></td></tr><tr><td className="font-monospace">interval </td><td className="font-monospace"><div><code>number</code><span> | </span><code>enum</code></div></td><td></td><td><span>The amount of time to delay between automatically cycling an item. If <code>null</code>, carousel will not automatically cycle.</span></td></tr><tr><td className="font-monospace">keyboard </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Whether the carousel should react to keyboard events.</span></td></tr><tr><td className="font-monospace">pause </td><td className="font-monospace"><div><code>'hover'</code><span> | </span><code>false</code></div></td><td></td><td><div><p>If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the carousel won't pause it.</p><p>On touch-enabled devices, when set to <code>"hover"</code>, cycling will pause on <code>touchend</code> (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.</p></div></td></tr><tr><td className="font-monospace">wrap </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Whether the carousel should cycle continuously or have hard stops.</span></td></tr><tr><td className="font-monospace">touch </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Whether the carousel should support left/right swipe interactions on touchscreen devices.</span></td></tr><tr><td className="font-monospace">prevIcon </td><td className="font-monospace"><div>node</div></td><td></td><td><span>Override the default button icon for the "previous" control</span></td></tr><tr><td className="font-monospace">prevLabel </td><td className="font-monospace"><div>string</div></td><td></td><td><p>Label shown to screen readers only, can be used to show the previous element
in the carousel.
Set to null to deactivate.</p></td></tr><tr><td className="font-monospace">nextIcon </td><td className="font-monospace"><div>node</div></td><td></td><td><span>Override the default button icon for the "next" control</span></td></tr><tr><td className="font-monospace">nextLabel </td><td className="font-monospace"><div>string</div></td><td></td><td><p>Label shown to screen readers only, can be used to show the next element
in the carousel.
Set to null to deactivate.</p></td></tr><tr><td className="font-monospace">variant </td><td className="font-monospace"><div><code>'dark'</code></div></td><td></td><td><p>Color variant that controls the colors of the controls, indicators
and captions.</p></td></tr><tr><td className="font-monospace">defaultActiveIndex </td><td className="font-monospace"><div></div></td><td><code>0</code></td><td></td></tr></tbody></table>
    <h2>CarouselItem</h2>
    <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>'div'</code></td><td><span>Set a custom element for this component</span></td></tr><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'carousel-item'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">interval </td><td className="font-monospace"><div>number</div></td><td></td><td><span>The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's <code>interval</code> prop value if none is specified.</span></td></tr></tbody></table>
    <h2>CarouselCaption</h2>
    <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'carousel-caption'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
    </>
  },
}