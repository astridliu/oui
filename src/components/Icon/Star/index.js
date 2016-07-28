import React from 'react';

import Star16 from 'oui-icons/src/16/star-16.svg';
import Star24 from 'oui-icons/src/24/star-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Star = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Star16;
      break;
    case 24:
      SVG = Star24;
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

Star.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Star;

