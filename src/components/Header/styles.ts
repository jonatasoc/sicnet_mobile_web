import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 10px auto 40px;

  nav {
    border-radius: 0;
    border: 0;
    background-color: white;
    padding-left: 3px;
    display: flex;

    img {
      width: 70%;
      height: auto;
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
    border-radius: 5px;
    letter-spacing: 1px;

    span {
      display: block;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }
`;
