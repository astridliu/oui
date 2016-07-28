import React from 'react';

import Badge16 from 'oui-icons/src/16/badge-16.svg';
import Badge24 from 'oui-icons/src/24/badge-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Badge = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Badge16;
      break;
    case 24:
      SVG = Badge24;
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

Badge.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Badge;

