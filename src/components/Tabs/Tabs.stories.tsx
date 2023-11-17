import React, { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import TABS from './Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from '../Container';
import Form from 'react-bootstrap/Form';
import Nav from '../Nav';
import Row from '../Row';
import Col from '../Col';

const meta = {
  title: 'Components/Tabs',
  decorators: [jsxDecorator],
  component: Container,
  /*
  tags: ['autodocs'],
  argTypes: {
    activeKey: {
      table: {
        disable: true
      }
    },
    defaultActiveKey: {
      table: {
        disable: true
      }
    },
    variant: {
      options: ['tabs', 'pills', 'underline', undefined],
      control: { type: 'select' },
      table: {
        type: { summary: 'select variant' }
      }
    },
    transition: {
      table: {
        disable: true
      }
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'set id' }
      }
    },
    onSelect: {
      table: {
        disable: true
      }
    },
    mountOnEnter: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle mountOnEnter' }
      }
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle unmountOnExit' }
      }
    },
    fill: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle fill' }
      }
    },
    justify: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'toggle justify' }
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

type Story = StoryObj<typeof Container>;

function UncontrolledExample() {
  return (
    <TABS
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </TABS>
  );
}

const uncontrolledExample = `import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;`;

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <TABS
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </TABS>
  );
}

const controlledTabsExample = `import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;`;

function NoAnimationExample() {
  return (
    <TABS
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </TABS>
  );
}

const noAnimationExample = `import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NoAnimationExample() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default NoAnimationExample;`;

function FillExample() {
  return (
    <TABS
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </TABS>
  );
}

const fillExample = `import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;`;

function JustifiedExample() {
  return (
    <TABS
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </TABS>
  );
}

const justifiedExample = `import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;`;

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

const leftTabsExample = `import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;`;

export const Overview: Story = {
  args: {
    children:
      <>
        <h1>Tabs</h1>
        <p className="lead">Dynamic tabbed interfaces</p>
        <h2>Examples</h2>
        <p>Create dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel" target="_blank" rel="noopener noreferrer"><abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices</a>. <code>Tabs</code> is a higher-level component for quickly creating a <code>Nav</code> matched with a set of <code>TabPane</code>s.</p>
        <UncontrolledExample />
        <br />
        <br />
        <SourceCode value={uncontrolledExample} />
        <br />
        <h3>Controlled</h3>
        <p><code>Tabs</code> can be controlled directly when you want to handle the selection logic personally.</p>
        <ControlledTabsExample />
        <br />
        <br />
        <SourceCode value={controlledTabsExample} />
        <br />
        <h3>No animation</h3>
        <p>Set the <code>transition</code> prop to <code>false</code>.</p>
        <NoAnimationExample />
        <br />
        <br />
        <SourceCode value={noAnimationExample} />
        <br />
        <h3>Fill and justify</h3>
        <p>Similar to the <code>Nav</code> component, you can force the contents of your <code>Tabs</code> to extend the full available width. To proportionately fill the space use <code>fill</code>. Notice that the <code>Tabs</code> is the entire width but each <code>Tab</code> item is a different size.</p>
        <FillExample />
        <br />
        <br />
        <SourceCode value={fillExample} />
        <br />
        <p>If you want each <code>Tab</code> to be the same size use <code>justify</code>.</p>
        <JustifiedExample />
        <br />
        <br />
        <SourceCode value={justifiedExample} />
        <br />
        <h3>Dropdowns?</h3>
        <p>Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.</p>
        <p>That said, if Dropdowns do work technically (sans focus management), but we don't make any claims about support.</p>
        <h3>Custom tab layout</h3>
        <p>For more complex layouts the flexible <code>TabContainer</code>,</p>
        <p><code>TabContent</code>, and <code>TabPane</code> components along with any style of <code>Nav</code> allow you to quickly piece together your own Tabs component with additional markup needed.</p>
        <p>Create a set of NavItems each with an <code>eventKey</code> corresponding to the eventKey of a <code>TabPane</code>. Wrap the whole thing in a <code>TabContainer</code> and you have fully functioning custom tabs component. Check out the below example making use of the grid system, pills and underline.</p>
        <h3>Pills</h3>
        <LeftTabsExample />
        <br />
        <br />
        <SourceCode value={leftTabsExample} />
      </>
  },
}

export const API: Story = {
  args: {
    children:
      <>
        <h2>Tabs</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">activeKey </td><td className="font-monospace"><div><code>string</code><span> | </span><code>number</code></div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controlled by: <code>onSelect</code>, initial prop: <code>defaultActiveKey</code></span></em></small></div><span>Mark the Tab with a matching <code>eventKey</code> as active.</span></td></tr><tr><td className="font-monospace">defaultActiveKey </td><td className="font-monospace"><div><code>string</code><span> | </span><code>number</code></div></td><td></td><td><span>The default active key that is selected on start</span></td></tr><tr><td className="font-monospace">variant </td><td className="font-monospace"><div><code>'tabs'</code><span> | </span><code> 'pills' </code><span> | </span><code> 'underline'</code></div></td><td></td><td><span>Navigation style</span></td></tr><tr><td className="font-monospace">transition </td><td className="font-monospace"><div><code>Transition </code><span> | </span><code> false</code></div></td><td><code>Fade</code></td><td><div><p>Sets a default animation strategy for all children <code>&lt;TabPane&gt;</code>s.&lt;tbcont</p><p>Defaults to <code>&lt;Fade&gt;</code> animation, else use <code>false</code> to disable or a
        react-transition-group <code>&lt;Transition/&gt;</code> component.</p></div></td></tr><tr><td className="font-monospace">id </td><td className="font-monospace"><div><code>string</code></div></td><td></td><td><p>HTML id attribute, required if no <code>generateChildId</code> prop
        is specified.</p></td></tr><tr><td className="font-monospace">onSelect </td><td className="font-monospace"><div>func</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controls <code>activeKey</code></span></em></small></div><div><p>Callback fired when a Tab is selected.</p><pre className="codeBlockStandalone_MEMb thin-scrollbar codeBlockContainer_Ckt0 theme-code-block" ><code className="codeBlockLines_e6Vv"><div className="lang-js codeBlockContainer_Ckt0 theme-code-block" ><div className="codeBlockContent_biex"><pre className="prism-code language-text codeBlock_bY9V thin-scrollbar"><code className="codeBlockLines_e6Vv"></code></pre><div className="buttonGroup__atx"></div></div></div></code></pre></div></td></tr><tr><td className="font-monospace">mountOnEnter </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Wait until the first "enter" transition to mount tabs (add them to the DOM)</span></td></tr><tr><td className="font-monospace">unmountOnExit </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Unmount tabs (remove it from the DOM) when it is no longer visible</span></td></tr><tr><td className="font-monospace">fill </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Have all <code>Tabs</code>s proportionately fill all available width.</span></td></tr><tr><td className="font-monospace">justify </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Have all <code>Tab</code>s evenly fill all available width.</span></td></tr></tbody></table>
        <h2>Tab</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">eventKey </td><td className="font-monospace"><div><code>string</code><span> | </span><code>number</code></div></td><td></td><td><span>A unique identifier for the Component, the <code>eventKey</code> makes it distinguishable from others in a set. Similar to React's <code>key</code> prop, in that it only needs to be unique amongst the Components siblings, not globally. </span></td></tr><tr><td className="font-monospace">title <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>node</div></td><td></td><td><span>Content for the tab title.</span></td></tr><tr><td className="font-monospace">disabled </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>The disabled state of the tab.</span></td></tr><tr><td className="font-monospace">tabClassName </td><td className="font-monospace"><div>string</div></td><td></td><td><span>Class to pass to the underlying nav link.</span></td></tr><tr><td className="font-monospace">tabAttrs </td><td className="font-monospace"><div>object</div></td><td></td><td><span>Object containing attributes to pass to underlying nav link.</span></td></tr></tbody></table>
        <h2>TabContainer</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">id </td><td className="font-monospace"><div><code>string</code></div></td><td></td><td><p>HTML id attribute, required if no <code>generateChildId</code> prop
        is specified.</p></td></tr><tr><td className="font-monospace">transition </td><td className="font-monospace"><div><code>Transition </code><span> | </span><code> false</code></div></td><td><code>Fade</code></td><td><p>Sets a default animation strategy for all children <code>&lt;TabPane&gt;</code>s.
        Defaults to <code>&lt;Fade&gt;</code> animation; else, use <code>false</code> to disable, or a
        custom react-transition-group <code>&lt;Transition/&gt;</code> component.</p></td></tr><tr><td className="font-monospace">mountOnEnter </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Wait until the first "enter" transition to mount tabs (add them to the DOM)</span></td></tr><tr><td className="font-monospace">unmountOnExit </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Unmount tabs (remove it from the DOM) when they are no longer visible</span></td></tr><tr><td className="font-monospace">generateChildId </td><td className="font-monospace"><div>func</div></td><td></td><td><div><p>A function that takes an <code>eventKey</code> and <code>type</code> and returns a unique id for
        child tab <code>&lt;NavItem&gt;</code>s and <code>&lt;TabPane&gt;</code>s. The function <em>must</em> be a pure
        function, meaning it should always return the <em>same</em> id for the same set
        of inputs. The default value requires that an <code>id</code> to be set for the
        <code>&lt;TabContainer&gt;</code>.</p><p>The <code>type</code> argument will either be <code>"tab"</code> or <code>"pane"</code>.</p></div></td></tr><tr><td className="font-monospace">onSelect </td><td className="font-monospace"><div>func</div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controls <code>activeKey</code></span></em></small></div><span>A callback fired when a tab is selected.</span></td></tr><tr><td className="font-monospace">activeKey </td><td className="font-monospace"><div><code>string</code><span> | </span><code>number</code></div></td><td></td><td><div className="mb-2"><small><em className="text-info-emphasis"><span>controlled by: <code>onSelect</code>, initial prop: <code>defaultActiveKey</code></span></em></small></div><span>The <code>eventKey</code> of the currently active tab.</span></td></tr></tbody></table>
        <h2>TabContent</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix <sup className="text-danger">Required</sup></td><td className="font-monospace"><div>string</div></td><td><code>'tab-content'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td><code>"div"</code></td><td><span>You can use a custom element type for this component.</span></td></tr></tbody></table>
        <h2>TabPane</h2>
        <table className="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td className="font-monospace">bsPrefix </td><td className="font-monospace"><div>string</div></td><td><code>'tab-pane'</code></td><td><span>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</span></td></tr><tr><td className="font-monospace">as </td><td className="font-monospace"><div>elementType</div></td><td></td><td><span>You can use a custom element type for this component.</span></td></tr><tr><td className="font-monospace">eventKey </td><td className="font-monospace"><div><code>string</code><span> | </span><code>number</code></div></td><td></td><td><span>A key that associates the <code>TabPane</code> with it's controlling <code>NavLink</code>.</span></td></tr><tr><td className="font-monospace">active </td><td className="font-monospace"><div>bool</div></td><td></td><td><p>Toggles the active state of the TabPane, this is generally controlled by a
        TabContainer.</p></td></tr><tr><td className="font-monospace">transition </td><td className="font-monospace"><div><code>bool</code><span> | </span><code>elementType</code></div></td><td></td><td><p>Use animation when showing or hiding <code>&lt;TabPane&gt;</code>s. Defaults to <code>&lt;Fade&gt;</code>
        animation, else use <code>false</code> to disable or a react-transition-group
        <code>&lt;Transition/&gt;</code> component.</p></td></tr><tr><td className="font-monospace">onEnter </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onEnter callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">onEntering </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onEntering callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">onEntered </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onEntered callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">onExit </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onExit callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">onExiting </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onExiting callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">onExited </td><td className="font-monospace"><div>func</div></td><td></td><td><span>Transition onExited callback when animation is not <code>false</code></span></td></tr><tr><td className="font-monospace">mountOnEnter </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Wait until the first "enter" transition to mount the tab (add it to the DOM)</span></td></tr><tr><td className="font-monospace">unmountOnExit </td><td className="font-monospace"><div>bool</div></td><td></td><td><span>Unmount the tab (remove it from the DOM) when it is no longer visible</span></td></tr><tr><td className="font-monospace">id </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr><tr><td className="font-monospace">aria-labelledby </td><td className="font-monospace"><div>string</div></td><td></td><td></td></tr></tbody></table>
      </>
  },
}