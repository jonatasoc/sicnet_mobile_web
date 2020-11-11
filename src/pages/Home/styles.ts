import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: var(--color-text-in-primary);
  font-size: 1.2rem;
  padding: 0 8px;
  text-align: center;
  margin-bottom: 8px;
  margin-top: -25px;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 10px;

  > div {
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
    }
  }

  hr {
    border: 0;
    width: 32%;
    background-color: #e0e0e0;
    height: 1px;
  }
`;

export const SelectOS = styled.section`
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
    font-size: 40px;
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
