import React from 'react';

import Loser16 from 'oui-icons/src/16/loser-16.svg';
import Loser24 from 'oui-icons/src/24/loser-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Loser = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Loser16;
      break;
    case 24:
      SVG = Loser24;
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

Loser.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Loser;

