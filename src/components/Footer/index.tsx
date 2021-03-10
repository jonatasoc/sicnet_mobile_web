import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <section>
        <h2>DÚVIDAS:</h2>
        <hr />
        <p>
          Entrar em contato com a equipe de Gestão de Serviços (SGI) através dos
          canais abaixo:
        </p>
        <p>
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          <span>E-mail: </span>
          <a href="mailto:ApoioUsuarioSGI@aneel.gov.br?Subject=SicNet-Mobile">
            ApoioUsuarioSGI@aneel.gov.br
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={['fas', 'phone']} />
          <span style={{ fontSize: '0.9rem' }}>Ramal: 8368 / 8115</span>
        </p>
      </section>
    </Container>
  );
}
