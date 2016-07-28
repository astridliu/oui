import React from 'react';

import Lock16 from 'oui-icons/src/16/lock-16.svg';
import Lock24 from 'oui-icons/src/24/lock-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Lock = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Lock16;
      break;
    case 24:
      SVG = Lock24;
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

Lock.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Lock;

