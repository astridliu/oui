import React from 'react';

import AlignCenter16 from 'oui-icons/src/16/align-center-16.svg';
import AlignCenter24 from 'oui-icons/src/24/align-center-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignCenter = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = AlignCenter16;
      break;
    case 24:
      SVG = AlignCenter24;
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

AlignCenter.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignCenter;

