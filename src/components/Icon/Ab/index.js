import React from 'react';

import Ab16 from 'oui-icons/src/16/ab-16.svg';
import Ab24 from 'oui-icons/src/24/ab-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Ab = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Ab16;
      break;
    case 24:
      SVG = Ab24;
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

Ab.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Ab;

