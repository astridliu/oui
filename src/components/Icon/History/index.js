import React from 'react';

import History16 from 'oui-icons/src/16/history-16.svg';
import History24 from 'oui-icons/src/24/history-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const History = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = History16;
      break;
    case 24:
      SVG = History24;
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

History.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default History;

