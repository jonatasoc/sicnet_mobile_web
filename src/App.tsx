import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Routers from './routes';
import GlobalStyle from './styles/styles';
import AppProvider from './hooks';

library.add(fas, fab);

function App() {
  return (
    <AppProvider>
      <Routers />
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
