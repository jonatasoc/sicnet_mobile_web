import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
  margin-bottom: 30px;
`;

export const UploadInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  div.animated {
    flex-basis: 30%;
  }

  img {
    width: 80%;
    height: auto;
    margin-left: 50px;
  }

  .MuiButton-label svg {
    margin-right: 5px;
  }
`;

export const UploadFooter = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;
    margin-bottom: 15px;

    svg {
      margin-right: 5px;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  .MuiButton-containedSizeLarge {
    font-size: 1.2rem;
  }
`;

export const FileInfo = styled.div`
  strong {
    margin-top: 10px;
    font-size: 12px;
    color: #363f5f;
    margin-top: 5px;
  }
`;

export const UploadFileErrMsg = styled.p`
  color: #f44336;
`;

export const ButtonsContainer = styled.div`
  > span {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;
