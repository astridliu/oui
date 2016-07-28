import React from 'react';

import EyeClosed16 from 'oui-icons/src/16/eye-closed-16.svg';
import EyeClosed24 from 'oui-icons/src/24/eye-closed-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EyeClosed = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = EyeClosed16;
      break;
    case 24:
      SVG = EyeClosed24;
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

EyeClosed.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EyeClosed;

