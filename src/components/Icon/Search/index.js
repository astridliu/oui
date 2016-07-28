import React from 'react';

import Search16 from 'oui-icons/src/16/search-16.svg';
import Search24 from 'oui-icons/src/24/search-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Search = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Search16;
      break;
    case 24:
      SVG = Search24;
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

Search.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Search;

