import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Content, Title } from './styles';
import './styles.css';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Selecione o tipo de sistema do seu smartphone</Title>
        <Content className="animated fadeIn">
          <div>
            <div className="section-select-os">
              <Link to="/android">
                <FontAwesomeIcon icon={['fab', 'android']} />
                <p className="android">Android</p>
              </Link>
            </div>
            <hr />
            <div className="section-select-os">
              <Link to="/ios">
                <FontAwesomeIcon icon={['fab', 'apple']} />
                <p className="ios">
                  iOS <i>(iPhone, iPad)</i>{' '}
                </p>
              </Link>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Home;
