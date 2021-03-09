import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Title, OSType } from './styles';
import Main from '../../components/Main';

const Home: React.FC = () => {
  return (
    <Main>
      <Title>Selecione o tipo de sistema do seu smartphone</Title>
      {/* <Content className="animated fadeIn"> */}
      <OSType>
        <Link to="/android">
          <FontAwesomeIcon icon={['fab', 'android']} />
          <p className="android">Android</p>
        </Link>
      </OSType>
      <hr />
      <OSType>
        <Link to="/ios">
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <p className="ios">
            iOS <i>(iPhone, iPad)</i>
          </p>
        </Link>
      </OSType>
      {/* </Content> */}
    </Main>
  );
};

export default Home;
