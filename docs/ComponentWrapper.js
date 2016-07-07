import React from 'react';
import PropsTable from './PropsTable';
import ComponentRow from './ComponentRow';

const ComponentWrapper = (props) => {

  return (
    <div className="push-quad--ends">

      <h2 className="push-double--bottom">
        {props.title}
      </h2>

      <p>{props.description}</p>

      <div className="example border--all soft push--bottom">
        <h3>Example</h3>
        {props.examples.map( (exampleObject, i) => {

          return <ComponentRow key={i}
                               components={exampleObject.examples}
                               backgroundColor={exampleObject.backgroundColor}
                               isPadded={exampleObject.isPadded}/>

        })}
      </div>

      <PropsTable componentProps={props.props}/>
    </div>
  );
};

ComponentWrapper.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

export default ComponentWrapper;
