import React from 'react';

import Help16 from 'oui-icons/src/16/help-16.svg';
import Help24 from 'oui-icons/src/24/help-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Help = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Help16;
      break;
    case 24:
      SVG = Help24;
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

Help.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Help;

