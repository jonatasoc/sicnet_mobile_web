import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  margin-top: 25px;

  > p {
    margin-bottom: 10px;
  }

  > ol {
    margin-left: 30px;
  }
`;
