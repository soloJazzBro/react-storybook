import React, { useState, useRef, useEffect, RefAttributes } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Overlay from './Overlay';
import OVERLAYTRIGGER from 'react-bootstrap/OverlayTrigger';
import TOOLTIP, { TooltipProps } from 'react-bootstrap/Tooltip';
import POPOVER from 'react-bootstrap/Popover';
import Container from '../Container';
//import { Button } from '../Button';
import Button from '../Button';
import Image from '../Image';
import { IconContext } from "react-icons";
import { MdInfoOutline } from 'react-icons/md'
import Alert from '../Alert';
import Form from 'react-bootstrap/Form';

const meta = {
  title: 'Components/Overlay',
  decorators: [jsxDecorator],
  component: Container,
  /*
  tags: ['autodocs'],
  argTypes: {
  },
  */
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

const TriggerExample = () => {
  const renderTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
    <TOOLTIP id="button-tooltip" {...props}>
      Simple tooltip
    </TOOLTIP>
  );

  return (
    <OVERLAYTRIGGER
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OVERLAYTRIGGER>
  );
}

const triggerExample = `import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerExample() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  );
}

export default TriggerExample;`;

function TriggerRendererProp() {
  return (
    <OVERLAYTRIGGER
      placement="bottom"
      overlay={<TOOLTIP id="button-tooltip-2">Check out this avatar</TOOLTIP>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="./20x20.svg"
          />
          <span className="ms-1">Hover to see</span>
        </Button>
      )}
    </OVERLAYTRIGGER>
  );
}

const triggerRendererProp = `import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function TriggerRendererProp() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
          />
          <span className="ms-1">Hover to see</span>
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default TriggerRendererProp;`;

function ProTip() {
  return (
    <IconContext.Provider value={{ style: {marginTop: '-4px'}}}>
      <MdInfoOutline/>&nbsp;Pro Tip
    </IconContext.Provider> 
  );
}

function TooltipInCopyExample() {
  const Link = ({ id, children, title }) => (
    <OVERLAYTRIGGER overlay={<TOOLTIP id={id}>{title}</TOOLTIP>}>
      <a href="#">{children}</a>
    </OVERLAYTRIGGER>
  );

  return (
    <p>
      Tight pants next level keffiyeh{' '}
      <Link title="Default title" id="t-1">
        you probably
      </Link>{' '}
      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
      quinoa 8-bit american apparel{' '}
      <Link id="t-2" title="Another one">
        have a
      </Link>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
      cleanse vegan chambray. A really ironic artisan{' '}
      <Link title="Another one here too" id="t-3">
        whatever keytar
      </Link>
      , scenester farm-to-table banksy Austin{' '}
      <Link title="The last tip!" id="t-4">
        twitter handle
      </Link>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
  );
}

const tooltipInCopyExample = `import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipInCopyExample() {
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  return (
    <p>
      Tight pants next level keffiyeh{' '}
      <Link title="Default title" id="t-1">
        you probably
      </Link>{' '}
      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
      quinoa 8-bit american apparel{' '}
      <Link id="t-2" title="Another one">
        have a
      </Link>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
      cleanse vegan chambray. A really ironic artisan{' '}
      <Link title="Another one here too" id="t-3">
        whatever keytar
      </Link>
      , scenester farm-to-table banksy Austin{' '}
      <Link title="The last tip!" id="t-4">
        twitter handle
      </Link>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
  );
}

export default TooltipInCopyExample;`;

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <TOOLTIP id="overlay-example" {...props}>
            My Tooltip
          </TOOLTIP>
        )}
      </Overlay>
    </>
  );
}

const example = `import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default Example;`;

function TooltipPositionedExample() {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OVERLAYTRIGGER
          key={placement}
          placement={placement}
          overlay={
            <TOOLTIP id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </TOOLTIP>
          }
        >
          <Button variant="secondary" style={{marginRight: '2px'}}>Tooltip on {placement}</Button>
        </OVERLAYTRIGGER>
      ))}
    </>
  );
}

const tooltipPositionedExample = `import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipPositionedExample() {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={'tooltip-' + placement}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipPositionedExample;`;

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

function Api({...props}) {
  
  return (
    <>
    <h3>Overlay</h3>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">container </td><td className="font-monospace"><div><code>custom</code><span> | </span><code>func</code></div></td><td></td><td><p>A component instance, DOM node, or function that returns either.
The <code>container</code> element will have the Overlay appended to it via a React portal.</p></td></tr><tr><td className="font-monospace">target </td><td className="font-monospace"><div><code>custom</code><span> | </span><code>func</code></div></td><td></td><td><p>A component instance, DOM node, or function that returns either.
The overlay will be positioned in relation to the <code>target</code></p></td></tr><tr><td className="font-monospace">show </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Set the visibility of the Overlay</span></td></tr><tr><td className="font-monospace">popperConfig </td><td className="font-monospace"><div>object</div></td><td><code>{}</code></td><td><span>A set of popper options and props passed directly to Popper.</span></td></tr><tr><td className="font-monospace">rootClose </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>Specify whether the overlay should trigger onHide when the user clicks outside the overlay</span></td></tr><tr><td className="font-monospace">rootCloseEvent </td><td className="font-monospace"><div><code>'click'</code><span> | </span><code>'mousedown'</code></div></td><td></td><td><span>Specify event for triggering a "root close" toggle.</span></td></tr><tr><td className="font-monospace">onHide </td><td className="font-monospace"><div>func</div></td><td></td><td><p>A callback invoked by the overlay when it wishes to be hidden. Required if
<code>rootClose</code> is specified.</p></td></tr><tr><td className="font-monospace">transition </td><td className="font-monospace"><div><code>bool</code><span> | </span><code>elementType</code></div></td><td><code>Fade</code></td><td><p>Animate the entering and exiting of the Overlay. <code>true</code> will use the <code>&lt;Fade&gt;</code> transition,
or a custom react-transition-group <code>&lt;Transition&gt;</code> component can be provided.</p></td></tr><tr><td className="font-monospace">onEnter </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired before the Overlay transitions in</span></td></tr><tr><td className="font-monospace">onEntering </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the Overlay begins to transition in</span></td></tr><tr><td className="font-monospace">onEntered </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the Overlay finishes transitioning in</span></td></tr><tr><td className="font-monospace">onExit </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired right before the Overlay transitions out</span></td></tr><tr><td className="font-monospace">onExiting </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired as the Overlay begins to transition out</span></td></tr><tr><td className="font-monospace">onExited </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Callback fired after the Overlay finishes transitioning out</span></td></tr><tr><td className="font-monospace">placement </td><td className="font-monospace"><div><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></div></td><td><code>'top'</code></td><td><span>The placement of the Overlay in relation to it's <code>target</code>.</span></td></tr></tbody></table>
<h3>OverlayTrigger</h3>
<table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">children <sup className="text-danger">Required</sup></td><td className="font-monospace"><div><code>element</code><span> | </span><code>func</code></div></td><td></td><td></td></tr><tr><td className="font-monospace">trigger </td><td className="font-monospace"><div><code>'hover' </code><span> | </span><code> 'click' </code><span> | </span><code>'focus' </code><span> | </span><code> Array&lt;'hover' </code><span> | </span><code> 'click' </code><span> | </span><code>'focus'&gt;</code></div></td><td><code>['hover', 'focus']</code></td><td><div><p>Specify which action or actions trigger Overlay visibility</p><p>The <code>click</code> trigger ignores the configured <code>delay</code>.</p></div></td></tr><tr><td className="font-monospace">delay </td><td className="font-monospace"><div><code>number</code><span> | </span><code>shape</code></div></td><td></td><td><span>A millisecond delay amount to show and hide the Overlay once triggered</span></td></tr><tr><td className="font-monospace">show </td><td className="font-monospace"><div>bool</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controlled by: <code>onToggle</code>, initial prop: <code>defaultShow</code></span></em></small></div><div><p>The visibility of the Overlay. <code>show</code> is a <em>controlled</em> prop so should be paired
with <code>onToggle</code> to avoid breaking user interactions.</p><p>Manually toggling <code>show</code> does <strong>not</strong> wait for <code>delay</code> to change the visibility.</p></div></td></tr><tr><td className="font-monospace">defaultShow </td><td className="font-monospace"><div>bool</div></td><td><code>false</code></td><td><span>The initial visibility state of the Overlay.</span></td></tr><tr><td className="font-monospace">onToggle </td><td className="font-monospace"><div>func</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controls <code>`show`</code></span></em></small></div><div><p>A callback that fires when the user triggers a change in tooltip visibility.</p><p><code>onToggle</code> is called with the desired next <code>show</code>, and generally should be passed
back to the <code>show</code> prop. <code>onToggle</code> fires <em>after</em> the configured <code>delay</code></p></div></td></tr><tr><td className="font-monospace">flip </td><td className="font-monospace"><div>bool</div></td><td><code>placement &amp;&amp; placement.indexOf('auto') !== -1</code></td><td><span>The initial flip state of the Overlay.</span></td></tr><tr><td className="font-monospace">overlay <sup className="text-danger">Required</sup></td><td className="font-monospace"><div><code>func</code><span> | </span><code>element</code></div></td><td></td><td><span>An element or text to overlay next to the target.</span></td></tr><tr><td className="font-monospace">popperConfig </td><td className="font-monospace"><div>object</div></td><td><code>{}</code></td><td><span>A Popper.js config object passed to the the underlying popper instance.</span></td></tr><tr><td className="font-monospace">placement </td><td className="font-monospace"><div><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></div></td><td></td><td><span>The placement of the Overlay in relation to it's <code>target</code>.</span></td></tr></tbody></table>
<h3>Tooltip</h3>
<table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'tooltip'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">id </td><td className="font-monospace"><div><code>string</code></div></td><td></td><td><span>An html id attribute, necessary for accessibility</span></td></tr><tr><td className="font-monospace">placement </td><td className="font-monospace"><div><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></div></td><td><code>'right'</code></td><td><div><p>Sets the direction the Tooltip is positioned towards.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the tooltip</p></blockquote></div></td></tr><tr><td className="font-monospace">arrowProps </td><td className="font-monospace"><div><code>{ `ref: ReactRef, style: Object` }</code></div></td><td></td><td><div><p>An Overlay injected set of props for positioning the tooltip arrow.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the tooltip</p></blockquote></div></td></tr><tr><td className="font-monospace">hasDoneInitialMeasure </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Whether or not Popper has done its initial measurement and positioning.</span></td></tr></tbody></table>
<h3>Popover</h3>
<table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'popover'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">id </td><td className="font-monospace"><div><code>string</code></div></td><td></td><td><span>An html id attribute, necessary for accessibility</span></td></tr><tr><td className="font-monospace">placement </td><td className="font-monospace"><div><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></div></td><td><code>'right'</code></td><td><div><p>Sets the direction the Popover is positioned towards.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the popover</p></blockquote></div></td></tr><tr><td className="font-monospace">arrowProps </td><td className="font-monospace"><div>shape</div></td><td></td><td><div><p>An Overlay injected set of props for positioning the popover arrow.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the popover</p></blockquote></div></td></tr><tr><td className="font-monospace">body </td><td className="font-monospace"><div>bool</div></td><td></td><td><p>When this prop is set, it creates a Popover with a Popover.Body inside
passing the children directly to it</p></td></tr><tr><td className="font-monospace">hasDoneInitialMeasure </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Whether or not Popper has done its initial measurement and positioning.</span></td></tr></tbody></table>
<h3>PopoverBody</h3>
<table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'popover-body'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
<h3>PopoverHeader</h3>
<table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'popover-header'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
</>
  );
}

const popoverBasic = (
  <POPOVER id="popover-basic">
    <POPOVER.Header as="h3">Popover right</POPOVER.Header>
    <POPOVER.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </POPOVER.Body>
  </POPOVER>
);

const PopoverExample = () => (
  <OVERLAYTRIGGER trigger="click" placement="right" overlay={popoverBasic}>
    <Button variant="success">Click me to see</Button>
  </OVERLAYTRIGGER>
);

const popoverExample = `import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);`;

function PopoverPositionedExample() {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OVERLAYTRIGGER
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <POPOVER id={`popover-positioned-${placement}`}>
              <POPOVER.Header as="h3">{`Popover ${placement}`}</POPOVER.Header>
              <POPOVER.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </POPOVER.Body>
            </POPOVER>
          }
        >
          <Button variant="secondary" style={{marginRight: '2px'}}>Popover on {placement}</Button>
        </OVERLAYTRIGGER>
      ))}
    </>
  );
}

const popoverPositionedExample = `import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PopoverPositionedExample() {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={'popover-positioned-' + placement}>
              <Popover.Header as="h3">{'Popover + ' placement}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;`;

function ChangingContainers() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <POPOVER id="popover-contained">
          <POPOVER.Header as="h3">Popover bottom</POPOVER.Header>
          <POPOVER.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </POPOVER.Body>
        </POPOVER>
      </Overlay>
    </div>
  );
}

const changingContainers = `import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default Example;`;

const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log('updating!');
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <POPOVER ref={ref} body {...props}>
        {children}
      </POPOVER>
    );
  },
);

const longContent = `
  Very long
  Multiline content
  that is engaging and what-not
`;

const shortContent = 'Short and sweet!';

function UpdatingPopoverExample() {
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });

  return (
    <OVERLAYTRIGGER
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
      }
    >
      <Button>Holy guacamole!</Button>
    </OVERLAYTRIGGER>
  );
}

const updatingPopover = `import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log('updating!');
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} body {...props}>
        {children}
      </Popover>
    );
  },
);

const longContent = '
  Very long
  Multiline content
  that is engaging and what-not
';
const shortContent = 'Short and sweet!';

function Example() {
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });

  return (
    <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
      }
    >
      <Button>Holy guacamole!</Button>
    </OverlayTrigger>
  );
}

render(<Example />);`;

function Example2() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

const example2 = `import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

export default Example;`;

export const Overview: Story = {
  args: {
    children: 
      <>
        <h1>Overlay</h1>
        <p className="lead">A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.</p>
        <h2>Overview</h2>
        <p>Things to know about the React-Bootstrap Overlay components.</p>
        <ul className=""><li>Overlays rely on the third-party library <a href="https://popper.js.org" target="_blank" rel="noopener noreferrer">Popper.js</a>.
It's included automatically with React-Bootstrap, but you should reference the API
for more advanced use cases.</li><li>The <code>&lt;Tooltip&gt;</code> and <code>&lt;Popover&gt;</code> components do not position themselves. Instead the
<code>&lt;Overlay&gt;</code> (or <code>&lt;OverlayTrigger&gt;</code>) components, inject <code>ref</code> and <code>style</code> props.</li><li>Tooltip expects specific props injected by the <code>&lt;Overlay&gt;</code> component.</li><li>Tooltips for <code>disabled</code> elements must be triggered on a wrapper element.</li></ul>
        <h2>Overlay</h2>
        <p><code>Overlay</code> is the fundamental component for positioning and controlling tooltip visibility. It's a wrapper around Popper.js, that adds support for transitions, and visibility toggling.</p>
        <h2>Creating an overlay</h2>
        <p>Overlays consist of at least two elements, the "overlay", the element to be positioned, as well as a "target", the element the overlay is positioned in relation to. You can also have an "arrow" element, like the tooltips and popovers, but that is optional. Be sure to check out the <a href="https://popper.js.org/docs/v2" target="_blank" rel="noopener noreferrer">Popper</a> documentation for more details about the injected props.</p>
        <Example2/>
        <br/>
        <br/>
        <SourceCode value={example2}></SourceCode>
        <br/>
        <h2>OverlayTrigger</h2>
        <p>Since the above pattern is pretty common, but verbose, we've included <code>&lt;OverlayTrigger&gt;</code> component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match.</p>
        <p>Note that triggering components must be able to accept <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank" rel="noopener noreferrer">a ref</a> since <code>&lt;OverlayTrigger&gt;</code> will attempt to add one. You can use <a href="https://reactjs.org/docs/react-api.html#reactforwardref" target="_blank" rel="noopener noreferrer">forwardRef()</a> for function components.</p>
        <TriggerExample/>
        <br/>
        <br/>
        <SourceCode value={triggerExample}></SourceCode>
        <h2>Customizing trigger behavior</h2>
        <p>For more advanced behaviors <code>&lt;OverlayTrigger&gt;</code> accepts a function child that passes in the injected <code>ref</code> and event handlers that correspond to the configured <code>trigger</code> prop.</p>
        <p>You can manually apply the props to any element you want or split them up. The example below shows how to position the overlay to a different element than the one that triggers its visibility.</p>
        <Alert variant="primary" style={{width: '50%'}}>
          <Alert.Heading>
            <ProTip/>
          </Alert.Heading>
          <p>
            Using the function form of OverlayTrigger avoids a <code>React.findDOMNode</code> call, for those trying to be strict mode compliant.
          </p>
        </Alert>
        <TriggerRendererProp/>
        <br/>
        <br/>
        <SourceCode value={triggerRendererProp}></SourceCode>
        <br/>
        <h2>Tooltips</h2>
        <br/>
        <p>A tooltip component for a more stylish alternative to that anchor tag <code>title</code> attribute.</p>
        <h3>Examples</h3>
        <p>Hover over the links below to see tooltips.</p>
        <Alert variant='secondary' style={{width: '50%'}}><TooltipInCopyExample/></Alert>        
        <br/>
        <SourceCode value={tooltipInCopyExample}></SourceCode>
        <br/>
        <p>You can pass the <code>Overlay</code> injected props directly to the Tooltip component.</p>
        <Example/>
        <br/>
        <br/>
        <SourceCode value={example}></SourceCode>
        <br/>
        <p>Or pass a Tooltip element to <code>OverlayTrigger</code> instead.</p>
        <TooltipPositionedExample/>
        <br/>
        <br/>
        <SourceCode value={tooltipPositionedExample}></SourceCode>
        <br/>
        <h2>Popovers</h2>
        <p className="lead">A popover component, like those found in iOS.</p>
        <h3>Examples</h3>
        <br/>
        <PopoverExample/>
        <br/>
        <br/>
        <SourceCode value={popoverExample}></SourceCode>
        <br/>
        <p>As with <code>&lt;Tooltip&gt;</code>s, you can control the placement of the Popover.</p>
        <PopoverPositionedExample/>
        <br/>
        <br/>
        <SourceCode value={popoverPositionedExample}></SourceCode>
        <br/>
        <h3>Changing containers</h3>
        <p>You can specify a <code>container</code> to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlays.</p>
        <ChangingContainers/>
        <br/>
        <SourceCode value={changingContainers}></SourceCode>
        <br/>
        <h3>Updating position dynamically</h3>
        <p>Since we can't know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change.</p>
        <p>For this, the Overlay component also injects a <code>popper</code> prop with a <code>scheduleUpdate()</code> method that an overlay component can use to reposition itself.</p>
        <UpdatingPopoverExample/>
        <br/>
        <br/>
        <SourceCode value={updatingPopover}></SourceCode>
      </>
  },
}

export const API: Story = {
  args: {
    children: 
      <>
        <Api/>
      </>
  },
}