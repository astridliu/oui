import React from 'react';

import AlignJustify16 from 'oui-icons/src/16/align-justify-16.svg';
import AlignJustify24 from 'oui-icons/src/24/align-justify-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignJustify = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = AlignJustify16;
      break;
    case 24:
      SVG = AlignJustify24;
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

AlignJustify.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignJustify;

