import React from 'react';

import Redirect16 from 'oui-icons/src/16/redirect-16.svg';
import Redirect24 from 'oui-icons/src/24/redirect-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Redirect = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Redirect16;
      break;
    case 24:
      SVG = Redirect24;
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

Redirect.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Redirect;

