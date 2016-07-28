import React from 'react';

import Clipboard16 from 'oui-icons/src/16/clipboard-16.svg';
import Clipboard24 from 'oui-icons/src/24/clipboard-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Clipboard = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Clipboard16;
      break;
    case 24:
      SVG = Clipboard24;
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

Clipboard.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Clipboard;

