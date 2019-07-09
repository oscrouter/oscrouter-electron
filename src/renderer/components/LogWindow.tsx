import React from 'react';

import { LogContainer } from '../styles/main.ts';

function LogWindow() {
  return (
    <LogContainer>
      Thu 04 Jul 2019 [0:05:15] tcp client 127.0.0.1:5000 reconnecting in 5...
    </LogContainer>
  );
}

export default LogWindow;
