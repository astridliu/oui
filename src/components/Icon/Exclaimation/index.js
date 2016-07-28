import React from 'react';

import Exclaimation16 from 'oui-icons/src/16/exclaimation-16.svg';
import Exclaimation24 from 'oui-icons/src/24/exclaimation-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Exclaimation = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Exclaimation16;
      break;
    case 24:
      SVG = Exclaimation24;
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

Exclaimation.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Exclaimation;

