/* eslint-disable react/jsx-filename-extension, react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
let doctrine = require('doctrine');

import ComponentWrapper from './ComponentWrapper';
import componentsJSON from './data.json';

import Attention from '../src/components/Attention';
import ArrowsInline from '../src/components/ArrowsInline';
import Button from '../src/components/Button';
import Code from '../src/components/Code';
import Input from '../src/components/Input';
import Label from '../src/components/Label';

// Component array to loop over
const components = [
  Attention,
  ArrowsInline,
  Button,
  Code,
  Input,
  Label,
]

const ComponentRow = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  );
};

ComponentRow.propTypes = {
  children: React.PropTypes.any.isRequired,
};

class App extends React.Component {
  render() {

    let componentNodes = components.map(function(Component) {
      let json = componentsJSON['src/components/' + Component.name + '/index.js'];
      let example = doctrine.parse(json.description);

      return (
        <ComponentWrapper
          key={ Component.name }
          description={ json.description }
          example={ example }
          title={ Component.name }>
          {/* example.js code */}
          {/* props table */}
        </ComponentWrapper>
      );
    });

    return (
      <div style={ { margin: '50px auto', width: '800px' } }>

        <header className="push-quad--ends">
          <h1>
            <img className="push--right soft-half--bottom display--inline-block vertical-align--middle"
                 src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif"
                 width="130" />
                 OUI React Components
          </h1>
        </header>

        { componentNodes }

        <footer className="soft-quad--ends border--top">
          <p className="muted">
            <img className="push--right soft-half--bottom display--inline-block vertical-align--middle"
                 src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif"
                 style={{WebkitFilter: 'grayscale(100%)'}}
                 width="40" />
                Our React component documentation is a work in progress. <a href="https://optimizely.slack.com/messages/oui">Ask for help</a>!
          </p>
        </footer>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
