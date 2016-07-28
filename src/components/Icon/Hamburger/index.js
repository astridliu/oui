import React from 'react';

import Hamburger16 from 'oui-icons/src/16/hamburger-16.svg';
import Hamburger24 from 'oui-icons/src/24/hamburger-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Hamburger = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Hamburger16;
      break;
    case 24:
      SVG = Hamburger24;
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

Hamburger.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Hamburger;

