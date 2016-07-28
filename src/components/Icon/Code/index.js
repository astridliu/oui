import React from 'react';

import Code16 from 'oui-icons/src/16/code-16.svg';
import Code24 from 'oui-icons/src/24/code-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Code = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Code16;
      break;
    case 24:
      SVG = Code24;
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

Code.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Code;

