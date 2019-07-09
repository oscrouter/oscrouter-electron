import React, { Component } from 'react';
import OperationButtons from './components/OperationButtons';
import LogWindow from './components/LogWindow';
import Route from './components/Route';

import {
  Wrapper,
  RouteContainer,
  BottomContainer,
  RouteTable,
} from './styles/main.ts';

class App extends Component {
  public render() {
    return (
      <Wrapper>
        <RouteContainer>
          <RouteTable>
            <tbody>
              <Route />
              <Route add={true} />
            </tbody>
          </RouteTable>
        </RouteContainer>
        <BottomContainer>
          <LogWindow />
          <OperationButtons />
        </BottomContainer>
      </Wrapper>
    );
  }
}

export default App;
