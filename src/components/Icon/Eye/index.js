import React from 'react';

import Eye16 from 'oui-icons/src/16/eye-16.svg';
import Eye24 from 'oui-icons/src/24/eye-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Eye = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Eye16;
      break;
    case 24:
      SVG = Eye24;
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

Eye.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Eye;

