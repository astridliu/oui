import React from 'react';

import Undo16 from 'oui-icons/src/16/undo-16.svg';
import Undo24 from 'oui-icons/src/24/undo-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Undo = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Undo16;
      break;
    case 24:
      SVG = Undo24;
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

Undo.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Undo;

