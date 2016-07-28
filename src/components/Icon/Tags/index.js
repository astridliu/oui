import React from 'react';

import Tags16 from 'oui-icons/src/16/tags-16.svg';
import Tags24 from 'oui-icons/src/24/tags-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Tags = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Tags16;
      break;
    case 24:
      SVG = Tags24;
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

Tags.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Tags;

