import React from 'react';

import AlignLeft16 from 'oui-icons/src/16/align-left-16.svg';
import AlignLeft24 from 'oui-icons/src/24/align-left-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignLeft = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = AlignLeft16;
      break;
    case 24:
      SVG = AlignLeft24;
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

AlignLeft.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignLeft;

