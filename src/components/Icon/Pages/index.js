import React from 'react';

import Pages16 from 'oui-icons/src/16/pages-16.svg';
import Pages24 from 'oui-icons/src/24/pages-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Pages = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Pages16;
      break;
    case 24:
      SVG = Pages24;
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

Pages.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Pages;

