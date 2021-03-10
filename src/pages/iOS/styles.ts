import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const ButtonsContainer = styled.div`
  > span {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;
