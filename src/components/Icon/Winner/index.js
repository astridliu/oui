import React from 'react';

import Winner16 from 'oui-icons/src/16/winner-16.svg';
import Winner24 from 'oui-icons/src/24/winner-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Winner = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Winner16;
      break;
    case 24:
      SVG = Winner24;
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

Winner.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Winner;

