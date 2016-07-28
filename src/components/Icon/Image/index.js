import React from 'react';

import Image16 from 'oui-icons/src/16/image-16.svg';
import Image24 from 'oui-icons/src/24/image-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Image = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Image16;
      break;
    case 24:
      SVG = Image24;
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

Image.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Image;

