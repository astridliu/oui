import React from 'react';

import Collaborators16 from 'oui-icons/src/16/collaborators-16.svg';
import Collaborators24 from 'oui-icons/src/24/collaborators-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Collaborators = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Collaborators16;
      break;
    case 24:
      SVG = Collaborators24;
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

Collaborators.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Collaborators;

