import React from 'react';

import ParentSelector16 from 'oui-icons/src/16/parent-selector-16.svg';
import ParentSelector24 from 'oui-icons/src/24/parent-selector-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ParentSelector = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = ParentSelector16;
      break;
    case 24:
      SVG = ParentSelector24;
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

ParentSelector.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ParentSelector;

