import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  margin: 10px auto 40px;

  nav {
    background-color: white;
    padding-left: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 70%;
      height: auto;
    }

    svg {
      color: #004d6b;
      font-size: 2rem;
      margin-right: 2rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  h1 {
    color: #f2f2f2;
    font-size: 1.4rem;
    font-weight: 700;
    display: block;
    text-align: center;
    margin-top: 5px;
    background-color: #004d6b;
    padding: 8px 0;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.5);
    letter-spacing: 1px;

    span {
      display: block;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }
`;
