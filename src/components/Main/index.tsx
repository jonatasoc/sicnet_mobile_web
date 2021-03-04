import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import { Container } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Main;
