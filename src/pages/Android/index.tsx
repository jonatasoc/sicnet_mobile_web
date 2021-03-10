import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../../components/Main';

import { Content, Instructions } from './styles';
import BackButton from '../../components/Buttons/BackButton';
import AndroidCarousel from '../../components/AndroidCarousel';

export default function Android() {
  return (
    <Main>
      <Content className="animated bounceInRight">
        <FontAwesomeIcon icon={['fab', 'android']} />
        <p className="ios text-center" id="NomeSO">
          Android
        </p>

        <Instructions id="texto"></Instructions>
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
    </Main>
  );
}
