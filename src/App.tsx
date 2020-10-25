import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Routers from './routers';
import GlobalStyle from './styles/styles';

library.add(fas, fab);

function App() {
  return (
    <>
      <Routers />
      <GlobalStyle />
    </>
  );
}

export default App;
