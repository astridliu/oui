import React from 'react';

import Paperclip16 from 'oui-icons/src/16/paperclip-16.svg';
import Paperclip24 from 'oui-icons/src/24/paperclip-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Paperclip = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Paperclip16;
      break;
    case 24:
      SVG = Paperclip24;
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

Paperclip.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Paperclip;

