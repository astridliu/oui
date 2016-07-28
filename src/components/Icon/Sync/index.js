import React from 'react';

import Sync16 from 'oui-icons/src/16/sync-16.svg';
import Sync24 from 'oui-icons/src/24/sync-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Sync = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Sync16;
      break;
    case 24:
      SVG = Sync24;
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

Sync.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Sync;

