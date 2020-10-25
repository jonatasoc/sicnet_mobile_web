import React, { useState } from 'react';
import filesize from 'filesize';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Title, Container } from './styles';
import UploadFile from '../../components/UploadFile';
import FileList from '../../components/FileList';

const Upload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File>();

  function submitFile(file: File): void {
    // const selectedfile = {
    //   file,
    //   name: file.name,
    //   readableSize: filesize(file.size),
    // };

    setUploadedFiles(file);
  }
  return (
  <div>
    <Header />
    <Container>
      <Title>Selecione abaixo a versão</Title>
      <UploadFile onUpload={submitFile} />
          {/* {!!uploadedFiles.length && <FileList files={uploadedFiles} />} */}
    </Container>
    <Footer />
  </div>
  )
};

export default Upload;
