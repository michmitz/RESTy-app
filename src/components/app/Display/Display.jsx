import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ displayJSON }) => (
  <div data-testid="display">
    {displayJSON}
  </div>
);

Display.propTypes = {
  displayJSON: PropTypes.string.isRequired
};

export default Display;