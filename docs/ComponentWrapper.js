import React from 'react';
import Code from '../src/components/Code';
import ArrowsInline from '../src/components/ArrowsInline';
import reactElementToJSXString from 'react-element-to-jsx-string';

const ComponentWrapper = (props) => {
  return (
    <div className="push-triple--ends">

      <h2 className="push-double--bottom soft--bottom border--bottom">
        {props.title}
      </h2>

      <Code type="block">
        {reactElementToJSXString(<ArrowsInline type="what" type2="what2">test</ArrowsInline>)}
      </Code>

      <p>{props.example.description}</p>

    </div>
  );
};

ComponentWrapper.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

export default ComponentWrapper;
