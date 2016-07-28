import React from 'react';

import AlignRightLeft16 from 'oui-icons/src/16/align-right-left-16.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRightLeft = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = AlignRightLeft16;
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

AlignRightLeft.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRightLeft;

