import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  /* margin: 0 auto; */
  margin-top: 5px;
  background: #004d6b;
  color: #fff;

  section {
    h2 {
      letter-spacing: 0.2rem;
      margin-bottom: 1rem;
      padding-left: 2rem;
      padding-top: 1.5rem;
      font-size: 1.4rem;
    }

    p {
      padding-left: 2rem;
      margin-bottom: 10px;
      font-size: 1.3rem;

      svg {
        margin-right: 7px;
      }
    }

    a {
      color: #fff;
      font-style: italic;
    }
  }

  @media (min-width: 700px) {
    width: 60vw;

    p {
      padding-left: 2rem;
      line-height: 2.8rem;
      font-size: 1.5rem;
    }
  }
`;
