import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import { Container, Content } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Main;
