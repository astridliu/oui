import React from 'react';

import Events16 from 'oui-icons/src/16/events-16.svg';
import Events24 from 'oui-icons/src/24/events-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Events = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Events16;
      break;
    case 24:
      SVG = Events24;
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

Events.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Events;

