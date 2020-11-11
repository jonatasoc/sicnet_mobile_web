import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 10px;

  > div {
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* max-width: 94vw; */
    margin: 0 auto;
    border-radius: 1.2rem;
    padding: 15px 0px;

    @media (min-width: 700px) {
      display: flex;
      max-width: 60vw;
      height: 60vh;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Title = styled.h2`
  color: var(--color-text-in-primary);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 25px;
  margin-top: -25px;
`;
