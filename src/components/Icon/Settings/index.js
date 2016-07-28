import React from 'react';

import Settings16 from 'oui-icons/src/16/settings-16.svg';
import Settings24 from 'oui-icons/src/24/settings-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Settings = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Settings16;
      break;
    case 24:
      SVG = Settings24;
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

Settings.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Settings;

