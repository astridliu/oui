import React from 'react';

import Upload16 from 'oui-icons/src/16/upload-16.svg';
import Upload24 from 'oui-icons/src/24/upload-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Upload = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Upload16;
      break;
    case 24:
      SVG = Upload24;
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

Upload.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Upload;

