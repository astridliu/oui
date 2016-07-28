import React from 'react';

import Archive16 from 'oui-icons/src/16/archive-16.svg';
import Archive24 from 'oui-icons/src/24/archive-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Archive = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Archive16;
      break;
    case 24:
      SVG = Archive24;
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

Archive.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Archive;

