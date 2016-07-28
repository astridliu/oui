import React from 'react';

import Add16 from 'oui-icons/src/16/add-16.svg';
import Add24 from 'oui-icons/src/24/add-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Add = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Add16;
      break;
    case 24:
      SVG = Add24;
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

Add.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Add;

