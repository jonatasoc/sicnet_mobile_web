import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  max-width: 800px;
  margin: 0 auto 20px;

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
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f;

  margin: 25px 0;
  padding: 1rem;
`;

export const ButtonsContainer = styled.div`
  > span {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;
