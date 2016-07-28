import React from 'react';

import Play16 from 'oui-icons/src/16/play-16.svg';
import Play24 from 'oui-icons/src/24/play-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Play = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Play16;
      break;
    case 24:
      SVG = Play24;
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

Play.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Play;

