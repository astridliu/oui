import React from 'react';

import Audiences16 from 'oui-icons/src/16/audiences-16.svg';
import Audiences24 from 'oui-icons/src/24/audiences-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Audiences = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Audiences16;
      break;
    case 24:
      SVG = Audiences24;
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

Audiences.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Audiences;

