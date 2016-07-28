import React from 'react';

import Link16 from 'oui-icons/src/16/link-16.svg';
import Link24 from 'oui-icons/src/24/link-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Link = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Link16;
      break;
    case 24:
      SVG = Link24;
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

Link.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Link;

