import React from 'react';

import Desktop16 from 'oui-icons/src/16/desktop-16.svg';
import Desktop24 from 'oui-icons/src/24/desktop-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Desktop = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Desktop16;
      break;
    case 24:
      SVG = Desktop24;
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

Desktop.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Desktop;

