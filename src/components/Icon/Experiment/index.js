import React from 'react';

import Experiment16 from 'oui-icons/src/16/experiment-16.svg';
import Experiment24 from 'oui-icons/src/24/experiment-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Experiment = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Experiment16;
      break;
    case 24:
      SVG = Experiment24;
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

Experiment.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Experiment;

