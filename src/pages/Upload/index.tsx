import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import filesize from 'filesize';
import { FiAlertTriangle } from 'react-icons/fi';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Title, Container, UploadFooter, UploadInfoContainer } from './styles';
import UploadFile from '../../components/UploadFile';
import FileList from '../../components/FileList';
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
  }),
);

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFiles] = useState<File>();
  const [osType, setOsType] = useState('Android');
  const classesMaterialButtons = useStyles();
  const history = useHistory();

  const handleOsTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOsType(event.target.value);
  };

  function submitFile(file: File): void {
    // const selectedfile = {
    //   file,
    //   name: file.name,
    //   readableSize: filesize(file.size),
    // };

    setUploadedFiles(file);
  }

  function handleUpload() {
    return;
  }

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
                id="version-number"
                label="Versão"
                defaultValue=""
                placeholder="Informe a versão"
                variant="outlined"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
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
            <UploadFile onUpload={submitFile} />
            {/* {!!uploadedFiles.length && <FileList files={uploadedFiles} />} */}
            <UploadFooter>
              <p>
                <FiAlertTriangle size={16} style={{ display: 'block' }} />
            Permitido apenas arquivos .apk ou .ipa
          </p>
              <div className={classesMaterialButtons.root}>
                <Button onClick={() => history.push('/')} variant="contained" color="default" size="large" component="span">
                  Voltar
            </Button>
                <Button variant="contained" color="primary" size="large" component="span">
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

