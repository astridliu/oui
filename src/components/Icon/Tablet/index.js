import React from 'react';

import Tablet16 from 'oui-icons/src/16/tablet-16.svg';
import Tablet24 from 'oui-icons/src/24/tablet-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Tablet = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Tablet16;
      break;
    case 24:
      SVG = Tablet24;
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

Tablet.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Tablet;

