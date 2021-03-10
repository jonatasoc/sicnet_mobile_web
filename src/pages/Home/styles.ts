import styled from 'styled-components';

export const Title = styled.p`
  color: var(--text);
  font-size: 1rem;
  padding: 0 8px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Content = styled.section`
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

  hr {
    border: 0;
    width: 32%;
    background-color: #e0e0e0;
    height: 1px;
    margin-bottom: 15px;
  }
`;

export const OSType = styled.div`
  transition: background-color 0.2s ease;
  border-radius: 5px;
  padding: 2rem 2rem;
  text-align: center;
  margin-bottom: 15px;
  width: 300px;

  &:hover {
    transform: translate(0, -3px);
    background-color: #43a8ed;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 5px;
    letter-spacing: 0.1rem;

    &.android {
      color: #79c257;
      opacity: 0.8;
    }

    &.ios {
      color: #000;
      opacity: 0.8;
    }
  }

  svg {
    font-size: 50px;
  }

  svg[data-icon='android'] {
    margin-top: 15px;
    color: #79c257;
  }

  svg[data-icon='apple'] {
    margin-top: 15px;
    color: #000;
  }

  &:hover svg,
  &:hover p,
  &:focus svg,
  &:focus p {
    color: #fff;
    cursor: pointer;
  }
`;
