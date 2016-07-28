import React from 'react';

import Projects16 from 'oui-icons/src/16/projects-16.svg';
import Projects24 from 'oui-icons/src/24/projects-24.svg';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Projects = (props) => {
  let SVG;

  switch (props.size) {
    case 16:
      SVG = Projects16;
      break;
    case 24:
      SVG = Projects24;
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

Projects.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Projects;

