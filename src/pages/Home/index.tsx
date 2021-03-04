import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Content, Title, SelectOS } from './styles';
import Main from '../../components/Main';

const Home: React.FC = () => {
  return (
    <Main>
      <Container>
        <Title>Selecione o tipo de sistema do seu smartphone</Title>
        <Content className="animated fadeIn">
          <div>
            <SelectOS>
              <Link to="/android">
                <FontAwesomeIcon icon={['fab', 'android']} />
                <p className="android">Android</p>
              </Link>
            </SelectOS>
            <hr />
            <SelectOS>
              <Link to="/ios">
                <FontAwesomeIcon icon={['fab', 'apple']} />
                <p className="ios">
                  iOS <i>(iPhone, iPad)</i>
                </p>
              </Link>
            </SelectOS>
          </div>
        </Content>
      </Container>
    </Main>
  );
};

export default Home;
