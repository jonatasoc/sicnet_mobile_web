import React from 'react';
import { Content } from '../../pages/Home/styles';
import Footer from '../Footer';
import Header from '../Header';

import { Container } from './styles';

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
