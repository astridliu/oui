import React from 'react';

import Mobile16 from 'oui-icons/src/16/mobile-16.svg';
import Mobile24 from 'oui-icons/src/24/mobile-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Mobile = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Mobile16;
      break;
    case 24:
      SVG = Mobile24;
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

Mobile.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Mobile;

