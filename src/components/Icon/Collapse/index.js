import React from 'react';

import Collapse16 from 'oui-icons/src/16/collapse-16.svg';
import Collapse24 from 'oui-icons/src/24/collapse-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Collapse = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Collapse16;
      break;
    case 24:
      SVG = Collapse24;
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

Collapse.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Collapse;

