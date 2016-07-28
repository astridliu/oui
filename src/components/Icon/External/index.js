import React from 'react';

import External16 from 'oui-icons/src/16/external-16.svg';
import External24 from 'oui-icons/src/24/external-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const External = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = External16;
      break;
    case 24:
      SVG = External24;
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

External.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default External;

