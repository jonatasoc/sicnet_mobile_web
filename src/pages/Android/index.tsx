import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Content, Instructions, ButtonsContainer } from './styles';
import Main from '../../components/Main';
import BackButton from '../../components/Buttons/BackButton';
import AndroidCarousel from '../../components/AndroidCarousel';
import DownloadButton from '../../components/Buttons/DownloadButton';

export default function Android() {
  return (
    <Main>
      <Content className="animated bounceInRight">
        <FontAwesomeIcon icon={['fab', 'android']} />
        <p className="">Android</p>

        <Instructions>
          <strong>ATENÇÃO:</strong> Após baixar o aplicativo, siga os passos
          abaixo para seguir com a instalação.
        </Instructions>
        <div>
          <ButtonsContainer>
            <BackButton />
            <DownloadButton>
              <a href="/">Download</a>
            </DownloadButton>
          </ButtonsContainer>
        </div>
        <hr />
        <AndroidCarousel />
      </Content>
    </Main>
  );
}
