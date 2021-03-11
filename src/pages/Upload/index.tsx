import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertTriangle, FiUpload } from 'react-icons/fi';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';

import UploadFile from '../../components/UploadFile';
import api from '../../services/api';
import addFileImg from '../../assets/add_file.svg';
import BackButton from '../../components/Buttons/BackButton';
import Main from '../../components/Main';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface FileProps {
  file: File;
  name: string;
}

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFiles] = useState<FileProps | any>(null);
  const [osType, setOsType] = useState('Android');
  const [appVersion, setAppVersion] = useState('');
  const [errAppVersionValidation, setErrAppVersionValidation] = useState(false);
  const [errAppFileValidation, setErrAppFileValidation] = useState(false);

  const classesMaterialButtons = useStyles();
  const history = useHistory();

  async function submitFile(): Promise<void> {
    if (appVersion === '') {
      setErrAppVersionValidation(true);
      return;
    }

    if (uploadedFile === null) {
      setErrAppFileValidation(true);
      return;
    }

    const data = new FormData();

    data.append('version_number', appVersion);
    data.append('os_type', osType);
    data.append('app', uploadedFile?.file);

    try {
      await api.post('apps', data);
      console.log('Done!');
      history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }

  function handleUpload(files: File[]) {
    setErrAppFileValidation(false);
    const newFile = files[0];
    const selectedFile = {
      file: newFile,
      name: newFile.name,
    };
    setUploadedFiles(selectedFile);
  }

  const handleOsTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOsType(event.target.value);
  };
  const handleAppVersionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setErrAppVersionValidation(false);
    setAppVersion(event.target.value);
  };

  useEffect(() => {
    setUploadedFiles(null);
  }, [osType]);

  return (
    <Main>
      <Title>Informe abaixo os dados da nova versão</Title>
      <UploadInfoContainer>
        <div>
          <div className={classesMaterialButtons.root}>
            <TextField
              required
              id="version_number"
              label="Versão"
              helperText="Informe a versão"
              variant="outlined"
              value={appVersion}
              onChange={handleAppVersionChange}
              error={errAppVersionValidation}
            />
            <TextField
              id="os_type"
              select
              label="Selecione"
              value={osType}
              onChange={handleOsTypeChange}
              helperText="Selecione o tipo de Sistema"
              variant="outlined"
            >
              <MenuItem value="Android">Android</MenuItem>
              <MenuItem value="iOS">iOS</MenuItem>
            </TextField>
          </div>
          <UploadFile onUpload={handleUpload} osType={osType} />
          {errAppFileValidation && (
            <UploadFileErrMsg>
              Necessário selecionar o arquivo para envio.
            </UploadFileErrMsg>
          )}
          {uploadedFile?.name && (
            <FileInfo>
              <strong>{uploadedFile.name}</strong>
            </FileInfo>
          )}
          <UploadFooter>
            <p>
              <FiAlertTriangle size={16} style={{ display: 'block' }} />
              Permitido apenas arquivos {osType === 'Android' ? '.apk' : '.ipa'}
              .
            </p>
            <ButtonsContainer>
              <BackButton />
              <Button
                onClick={submitFile}
                variant="contained"
                color="primary"
                size="medium"
                component="span"
              >
                <FiUpload /> Upload
              </Button>
            </ButtonsContainer>
          </UploadFooter>
        </div>
        <Animated
          animationIn="bounceInRight"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <img src={addFileImg} alt="Upload File" />
        </Animated>
      </UploadInfoContainer>
    </Main>
  );
};

export default Upload;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 20px;
  }
`;

const UploadInfoContainer = styled.div`
  display: flex;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      order: 2;
    }

    div.animated {
      order: 1;

      img {
        width: 50%;
      }
    }
  }
`;

const UploadFooter = styled.section`
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

const FileInfo = styled.div`
  strong {
    margin-top: 10px;
    font-size: 12px;
    color: #363f5f;
    margin-top: 5px;
  }
`;

const UploadFileErrMsg = styled.p`
  color: #f44336;
`;

const ButtonsContainer = styled.div`
  > span {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;
