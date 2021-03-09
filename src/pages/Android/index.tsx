import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../../components/Main';

import { Container, Content, Instructions } from './styles';
import BackButton from '../../components/Buttons/BackButton';
import AndroidCarousel from '../../components/AndroidCarousel';

export default function Android() {
  return (
    <Main>
      <Container className="">
        <Content>
          <FontAwesomeIcon
            icon={['fab', 'android']}
            className="animated bounceInRight"
          />
          <p className="ios text-center animated bounceInRight" id="NomeSO">
            Android
          </p>

          <Instructions
            id="texto"
            className="animated bounceInLeft"
          ></Instructions>
          <AndroidCarousel />
          <hr />
          <div className="text-center">
            <a
              className="btn btn-primary btn-apps"
              href="itms-services://?action=download-manifest&url=https://sicnetmobile.aneel.gov.br/manifest.plist"
              role="button"
            >
              Baixar aplicativo
            </a>
            <BackButton />
          </div>
        </Content>
      </Container>
    </Main>
  );
}
