import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';

import {
  Wrapper,
  RouteContainer,
  LogContainer,
  BottomContainer,
  RouteTable,
  ButtonContainer,
} from '../styles/main';

class App extends Component {
  public render() {
    return (
      <Wrapper>
        <RouteContainer>
          <RouteTable>
            <thead>
              <td />
              <td>Label</td>
              <td>Incoming IP</td>
              <td>Port</td>
              <td>Path</td>
              <td>Min</td>
              <td>Max</td>
              <td />
              <td />
              <td>Outgoing IP</td>
              <td>Port</td>
              <td>Path</td>
              <td>Min</td>
              <td>Max</td>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={solidCircle} color="rgb(16,183,87)" />{' '}
                  <FontAwesomeIcon icon={regularCircle} color="rgb(60,60,60)" />
                </td>
              </tr>
            </tbody>
          </RouteTable>
        </RouteContainer>
        <BottomContainer>
          <LogContainer>
            Thu 04 Jul 2019 [0:05:15] tcp client 127.0.0.1:5000 reconnecting in
            5...
          </LogContainer>
          <ButtonContainer fullWidth={true}>
            <Button variant="contained">New</Button>
            <Button variant="contained">Open</Button>
            <Button variant="contained">Save</Button>
            <Button variant="contained">Save As</Button>
            <Button variant="contained">Clear Log</Button>
            <Button variant="contained">View Log</Button>
          </ButtonContainer>
        </BottomContainer>
      </Wrapper>
    );
  }
}

export default App;
