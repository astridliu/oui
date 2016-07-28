import React from 'react';

import Close16 from 'oui-icons/src/16/close-16.svg';
import Close24 from 'oui-icons/src/24/close-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Close = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Close16;
      break;
    case 24:
      SVG = Close24;
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

Close.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Close;

