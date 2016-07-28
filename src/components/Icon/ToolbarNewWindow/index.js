import React from 'react';

import ToolbarNewWindow24 from 'oui-icons/src/24/toolbar-new-window-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarNewWindow = (props) => {
  let SVG;

  switch (props.size) {
    case 24:
      SVG = ToolbarNewWindow24;
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

ToolbarNewWindow.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarNewWindow;

