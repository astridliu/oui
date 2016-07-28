import React from 'react';

import Campaigns16 from 'oui-icons/src/16/campaigns-16.svg';
import Campaigns24 from 'oui-icons/src/24/campaigns-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Campaigns = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Campaigns16;
      break;
    case 24:
      SVG = Campaigns24;
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

Campaigns.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Campaigns;

