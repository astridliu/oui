import React from 'react';

import Integrations16 from 'oui-icons/src/16/integrations-16.svg';
import Integrations24 from 'oui-icons/src/24/integrations-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Integrations = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Integrations16;
      break;
    case 24:
      SVG = Integrations24;
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

Integrations.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Integrations;

