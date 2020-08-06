import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header/index';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

    </BrowserRouter>
  );
}

export default App;
