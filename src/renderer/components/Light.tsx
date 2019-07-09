import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';

function Light({ on }: { on: boolean }) {
  if (on) {
    return (
      <FontAwesomeIcon
        icon={solidCircle}
        color="rgb(16,183,87)"
        style={{ fontSize: '0.75rem' }}
      />
    );
  }

  return (
    <FontAwesomeIcon
      icon={regularCircle}
      color="rgb(60,60,60)"
      style={{ fontSize: '0.75rem' }}
    />
  );
}

Light.propTypes = {
  on: PropTypes.bool,
};

Light.defaultProps = {
  on: false,
};

export default Light;
