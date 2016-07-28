import React from 'react';


/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const VariationSettings.svg = (props) => {
  let SVG;

  switch (props.size) {
    default:
  }

  return (
    <SVG
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

VariationSettings.svg.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default VariationSettings.svg;

