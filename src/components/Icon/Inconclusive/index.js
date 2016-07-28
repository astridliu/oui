import React from 'react';

import Inconclusive16 from 'oui-icons/src/16/inconclusive-16.svg';
import Inconclusive24 from 'oui-icons/src/24/inconclusive-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Inconclusive = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Inconclusive16;
      break;
    case 24:
      SVG = Inconclusive24;
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

Inconclusive.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Inconclusive;

