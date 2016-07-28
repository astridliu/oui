import React from 'react';

import Minus16 from 'oui-icons/src/16/minus-16.svg';
import Minus24 from 'oui-icons/src/24/minus-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Minus = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Minus16;
      break;
    case 24:
      SVG = Minus24;
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

Minus.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Minus;

