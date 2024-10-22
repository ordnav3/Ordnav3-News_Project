import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header/index';
import Home from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
