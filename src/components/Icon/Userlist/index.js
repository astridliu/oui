import React from 'react';

import Userlist16 from 'oui-icons/src/16/userlist-16.svg';
import Userlist24 from 'oui-icons/src/24/userlist-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Userlist = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Userlist16;
      break;
    case 24:
      SVG = Userlist24;
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

Userlist.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Userlist;

