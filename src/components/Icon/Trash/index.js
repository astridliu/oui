import React from 'react';

import Trash16 from 'oui-icons/src/16/trash-16.svg';
import Trash24 from 'oui-icons/src/24/trash-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Trash = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Trash16;
      break;
    case 24:
      SVG = Trash24;
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

Trash.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Trash;

