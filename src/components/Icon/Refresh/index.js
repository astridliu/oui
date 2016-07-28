import React from 'react';

import Refresh16 from 'oui-icons/src/16/refresh-16.svg';
import Refresh24 from 'oui-icons/src/24/refresh-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Refresh = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Refresh16;
      break;
    case 24:
      SVG = Refresh24;
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

Refresh.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Refresh;

