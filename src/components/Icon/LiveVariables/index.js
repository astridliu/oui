import React from 'react';

import LiveVariables16 from 'oui-icons/src/16/live-variables-16.svg';
import LiveVariables24 from 'oui-icons/src/24/live-variables-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const LiveVariables = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = LiveVariables16;
      break;
    case 24:
      SVG = LiveVariables24;
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

LiveVariables.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default LiveVariables;

