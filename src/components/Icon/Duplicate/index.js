import React from 'react';

import Duplicate16 from 'oui-icons/src/16/duplicate-16.svg';
import Duplicate24 from 'oui-icons/src/24/duplicate-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Duplicate = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Duplicate16;
      break;
    case 24:
      SVG = Duplicate24;
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

Duplicate.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Duplicate;

