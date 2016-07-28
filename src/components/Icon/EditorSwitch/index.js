import React from 'react';

import EditorSwitch16 from 'oui-icons/src/16/editor-switch-16.svg';
import EditorSwitch24 from 'oui-icons/src/24/editor-switch-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EditorSwitch = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = EditorSwitch16;
      break;
    case 24:
      SVG = EditorSwitch24;
      break;
    default:
  }

  return (
    <SVG
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

EditorSwitch.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EditorSwitch;

