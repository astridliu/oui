import React from 'react';

import Pause16 from 'oui-icons/src/16/pause-16.svg';
import Pause24 from 'oui-icons/src/24/pause-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Pause = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Pause16;
      break;
    case 24:
      SVG = Pause24;
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

Pause.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Pause;

