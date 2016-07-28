import React from 'react';

import AlignRight24 from 'oui-icons/src/24/align-right-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRight = (props) => {
  let SVG;

  switch (props.size) {
    case 24:
      SVG = AlignRight24;
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

AlignRight.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRight;

