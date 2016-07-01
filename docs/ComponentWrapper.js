import React from 'react';
import Code from '../src/components/Code';

const ComponentWrapper = (props) => {
  return (
    <div className="push-triple--ends">

      <h2 className="push-double--bottom soft--bottom border--bottom">
        {props.title}
      </h2>

      <Code type="block">
        example "HTML"
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
