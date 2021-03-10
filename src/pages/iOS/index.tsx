import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Content, Instructions } from './styles';
import BackButton from '../../components/Buttons/BackButton';
import Main from '../../components/Main';
import { ButtonsContainer } from '../Android/styles';
import DownloadButton from '../../components/Buttons/DownloadButton';

export default function Ios() {
  return (
    <Main>
      <Content>
        <FontAwesomeIcon
          icon={['fab', 'apple']}
          className="animated bounceInRight"
        />
        <p className="ios text-center animated bounceInRight" id="NomeSO">
          iOS <i>(iPhone, iPad)</i>
        </p>

        <Instructions id="texto" className="animated bounceInLeft">
          <p>
            Após a instalação do aplicativo SICNET - ASSINAR, realize os
            seguintes procedimentos:
          </p>
          <ol>
            <li>
              Faça login no aplicativo utilizando o seu nome e senha de rede da
              ANEEL;
            </li>
            <li>
              Clique no botão de configurações e adicione o seu certificado
              digital A1;
            </li>
            <li>O aplicativo está pronto e configurado para uso.</li>
          </ol>
          <div className="alert alert-info" role="alert">
            <strong>ATENÇÃO: </strong> Após clicar no botão{' '}
            <strong>"Baixar aplicativo"</strong>, a instalação será feita
            automaticamente, e o aplicativo aparecerá na tela do seu
            dispositivo.
          </div>
        </Instructions>
        <hr />
        <div>
          <ButtonsContainer>
            <BackButton />
            <DownloadButton>
              <a href="itms-services://?action=download-manifest&url=https://sicnetmobile.aneel.gov.br/manifest.plist">
                Download
              </a>
            </DownloadButton>
          </ButtonsContainer>
        </div>
      </Content>
    </Main>
  );
}
