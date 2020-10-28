import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Title, Container, UploadFooter, UploadInfoContainer, FileInfo, UploadFileErrMsg,
} from './styles';
import UploadFile from '../../components/UploadFile';
import api from '../../services/api';
import addFileImg from '../../assets/add_file.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

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
  const handleAppVersionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrAppVersionValidation(false);
    setAppVersion(event.target.value);
  };

  useEffect(() => {
    setUploadedFiles(null);
  }, [osType]);

  return (
    <div>
      <Header />
      <Container>
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
                <MenuItem value="Android">
                  Android
            </MenuItem>
                <MenuItem value="iOS">
                  iOS
            </MenuItem>
              </TextField>
            </div>
            <UploadFile onUpload={handleUpload} osType={osType} />
            {errAppFileValidation && <UploadFileErrMsg>Necessário selecionar o arquivo para envio.</UploadFileErrMsg>}
            {uploadedFile?.name && (
              <FileInfo>
                <strong>{uploadedFile.name}</strong>
              </FileInfo>
            )}
            <UploadFooter>
              <p>
                <FiAlertTriangle size={16} style={{ display: 'block' }} />
                Permitido apenas arquivos {osType === 'Android' ? '.apk' : '.ipa'}.
              </p>
              <div className={classesMaterialButtons.root}>
                <Button onClick={() => history.push('/')} variant="contained" color="default" size="large" component="span">
                  Voltar
            </Button>
                <Button onClick={submitFile} variant="contained" color="primary" size="large" component="span">
                  Upload
            </Button>
              </div>
            </UploadFooter>
          </div>
          <img src={addFileImg} alt="Upload File" />
        </UploadInfoContainer>
      </Container>
      <Footer />
    </div>
  )
};

export default Upload;

