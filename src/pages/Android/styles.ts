import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-width: 800px;
  margin: 0 auto 20px;

  /* box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5),
    0 7px 30px -10px rgba(150, 170, 180, 0.5); */
  border-radius: 1.2rem;
  padding: 15px 0px;

  > svg {
    font-size: 60px;
    color: #3ddc84;
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
