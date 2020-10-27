import React, { useState } from 'react';
import filesize from 'filesize';
import { FiAlertTriangle } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Title, Container, UploadFooter } from './styles';
import UploadFile from '../../components/UploadFile';
import FileList from '../../components/FileList';
import api from '../../services/api';

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFiles] = useState<File>();

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
        <Title>Selecione abaixo a versão</Title>
        <UploadFile onUpload={submitFile} />
        {/* {!!uploadedFiles.length && <FileList files={uploadedFiles} />} */}
        <UploadFooter>
          <p>
            <FiAlertTriangle size={16} />
            Permitido apenas arquivos CSV
          </p>
          <button onClick={handleUpload} type="button">
            Enviar
          </button>
        </UploadFooter>
      </Container>
      <Footer />
    </div>
  )
};

export default Upload;
