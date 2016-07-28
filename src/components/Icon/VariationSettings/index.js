import React from 'react';

import VariationSettings16 from 'oui-icons/src/16/variation-settings-16.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const VariationSettings = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = VariationSettings16;
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

VariationSettings.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default VariationSettings;

