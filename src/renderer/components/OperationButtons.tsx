import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { ButtonContainer } from '../styles/main.ts';

function OperationButtons() {
  return (
    <ButtonContainer fullWidth={true}>
      <Button variant="contained">New</Button>
      <Button variant="contained">Open</Button>
      <Button variant="contained">Save</Button>
      <Button variant="contained">Save As</Button>
      <Button variant="contained">Clear Log</Button>
      <Button variant="contained">View Log</Button>
    </ButtonContainer>
  );
}

export default OperationButtons;
