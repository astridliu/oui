import React from 'react';

import Elipsis16 from 'oui-icons/src/16/elipsis-16.svg';
import Elipsis24 from 'oui-icons/src/24/elipsis-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Elipsis = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Elipsis16;
      break;
    case 24:
      SVG = Elipsis24;
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

Elipsis.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Elipsis;

