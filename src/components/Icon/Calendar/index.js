import React from 'react';

import Calendar16 from 'oui-icons/src/16/calendar-16.svg';
import Calendar24 from 'oui-icons/src/24/calendar-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Calendar = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Calendar16;
      break;
    case 24:
      SVG = Calendar24;
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

Calendar.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Calendar;

