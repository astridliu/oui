import React from 'react';

import ToolbarInteractiveMode24 from 'oui-icons/src/24/toolbar-interactive-mode-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarInteractiveMode = (props) => {
  let SVG;

  switch (props.size) {
    case 24:
      SVG = ToolbarInteractiveMode24;
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

ToolbarInteractiveMode.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarInteractiveMode;

