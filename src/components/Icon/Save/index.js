import React from 'react';

import Save16 from 'oui-icons/src/16/save-16.svg';
import Save24 from 'oui-icons/src/24/save-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Save = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Save16;
      break;
    case 24:
      SVG = Save24;
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

Save.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Save;

