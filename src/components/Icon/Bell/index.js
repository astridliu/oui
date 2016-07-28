import React from 'react';

import Bell16 from 'oui-icons/src/16/bell-16.svg';
import Bell24 from 'oui-icons/src/24/bell-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Bell = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Bell16;
      break;
    case 24:
      SVG = Bell24;
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

Bell.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Bell;

