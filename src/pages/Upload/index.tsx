import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import filesize from 'filesize';
import { FiAlertTriangle } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Title, Container, UploadFooter } from './styles';
import UploadFile from '../../components/UploadFile';
import FileList from '../../components/FileList';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFiles] = useState<File>();
  const classesMaterialButtons = useStyles();
  const history = useHistory();

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
      </Container>
      <Footer />
    </div>
  )
};

export default Upload;

