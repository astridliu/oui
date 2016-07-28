import React from 'react';

import Goal16 from 'oui-icons/src/16/goal-16.svg';
import Goal24 from 'oui-icons/src/24/goal-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Goal = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Goal16;
      break;
    case 24:
      SVG = Goal24;
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

Goal.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Goal;

