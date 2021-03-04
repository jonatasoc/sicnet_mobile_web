import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;
export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 10px;

  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5),
    0 7px 30px -10px rgba(150, 170, 180, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 1.2rem;
  padding: 15px 0px;

  @media (min-width: 700px) {
    max-width: 70vw;
    height: 400px;
  }

  > svg {
    font-size: 60px;
  }

  hr {
    margin: 30px 0px;
    border: 4px;
    width: 100%;
    background-color: #e0e0e0;
    height: 1px;
  }
`;

export const Instructions = styled.div`
  margin-top: 25px;

  > p {
    margin-bottom: 10px;
  }

  > ol {
    margin-left: 30px;
  }
`;
