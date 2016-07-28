import React from 'react';

import Dimensions16 from 'oui-icons/src/16/dimensions-16.svg';
import Dimensions24 from 'oui-icons/src/24/dimensions-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Dimensions = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Dimensions16;
      break;
    case 24:
      SVG = Dimensions24;
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

Dimensions.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Dimensions;

