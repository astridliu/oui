import React from 'react';
import ComponentRowItem from './ComponentRowItem';
import Code from '../src/components/Code';
import reactElementToJSXString from 'react-element-to-jsx-string';

const ComponentRow = ( props ) => {
  let codeHTML = '';
  let classes = ['push--bottom'];
  if (props.isPadded) {
    classes.push('soft');
  }
  if (props.backgroundColor) {
    classes.push('background--' + props.backgroundColor);
  }

  return (
    <div className="push-triple--bottom">
      <div className={classes.join(' ')}>
        {
          props.components.map( (exampleComponent, i) => {
            codeHTML += reactElementToJSXString( exampleComponent ) + '\n';

            return (
              <ComponentRowItem key={i}
                isInline={props.components.length > 1}>
                {exampleComponent}
              </ComponentRowItem>
            )
          })
        }
      </div>
      <Code type="block"
        isHighlighted={true}>
        {codeHTML}
      </Code>
    </div>
  )

}

ComponentRow.propTypes = {
  isPadded: React.PropTypes.bool,
  components: React.PropTypes.array,
  backgroundColor: React.PropTypes.oneOf([
    'faint',
    'light',
    'muted',
    'medium',
    'charcoal',
    'brand',
    'brand-dark',
    'warning',
    'bad-news',
    'good-news',
    'live',
    'draft',
  ]),
}

export default ComponentRow;
