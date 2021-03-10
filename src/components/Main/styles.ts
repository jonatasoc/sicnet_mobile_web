import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  max-width: 800px;
  margin-bottom: 60px;

  border-radius: 1.2rem;
  padding: 15px;

  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

  @media (max-width: 768px) {
    width: 90%;
  }
`;
