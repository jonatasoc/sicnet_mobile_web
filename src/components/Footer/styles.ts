import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  margin-top: 5px;
  background: #004d6b;
  color: #fff;
  padding: 0 0 20px 8px;
  border-radius: 5px;
  font-family: Roboto;

  hr {
    max-width: 705px;
    color: #fff;
    margin-bottom: 5px;
  }

  section {
    h2 {
      letter-spacing: 0.1rem;
      padding-top: 1.5rem;
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;

      svg {
        margin-right: 7px;
      }
    }

    p:first-of-type {
      margin-bottom: 10px;
    }

    a {
      color: #fff;
      font-style: italic;
      font-size: 0.9rem;
    }
  }
`;
