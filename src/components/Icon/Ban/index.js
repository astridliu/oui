import React from 'react';

import Ban16 from 'oui-icons/src/16/ban-16.svg';
import Ban24 from 'oui-icons/src/24/ban-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Ban = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Ban16;
      break;
    case 24:
      SVG = Ban24;
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

Ban.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Ban;

