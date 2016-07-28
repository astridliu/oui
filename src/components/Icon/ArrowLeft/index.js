import React from 'react';

import ArrowLeft16 from 'oui-icons/src/16/arrow-left-16.svg';
import ArrowLeft24 from 'oui-icons/src/24/arrow-left-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowLeft = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = ArrowLeft16;
      break;
    case 24:
      SVG = ArrowLeft24;
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

ArrowLeft.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowLeft;

