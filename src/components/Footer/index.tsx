import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <section>
        <h2>DÚVIDAS:</h2>
        <p>
          Entrar em contato com a equipe de Gestão de Serviços (SGI) através dos
          canais abaixo:
        </p>
        <p>
          <strong>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            E-mail:
          </strong>
          <a href="mailto:ApoioUsuarioSGI@aneel.gov.br?Subject=SicNet-Mobile">
            ApoioUsuarioSGI@aneel.gov.br
          </a>
        </p>
        <p>
          <strong>
            <FontAwesomeIcon icon={['fas', 'phone']} />
            Ramal:
          </strong>{' '}
          8368 / 8115
        </p>
      </section>
    </Container>
  );
}
