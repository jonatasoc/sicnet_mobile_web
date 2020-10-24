import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './assets/styles/global.css';
import Routers from './routers';

library.add(fas, fab);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Routers />
  );
}

export default App;
