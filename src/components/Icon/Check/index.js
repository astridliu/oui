import React from 'react';

import Check16 from 'oui-icons/src/16/check-16.svg';
import Check24 from 'oui-icons/src/24/check-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Check = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Check16;
      break;
    case 24:
      SVG = Check24;
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

Check.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Check;

