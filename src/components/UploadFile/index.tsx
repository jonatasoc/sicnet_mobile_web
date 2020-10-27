import React, { ReactNode } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: Function;
}

const UploadFile: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
  function renderDragMessage(
    isDragActive: boolean,
    isDragRejest: boolean,
  ): ReactNode {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste o arquivo aqui.</UploadMessage>
      );
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  return (
    <>
      <div>
        <label htmlFor="os">Versão</label>
        <input name="os" placeholder="Informe o número da versão" />
      </div>
      <div>
        <label htmlFor="version">Versão</label>
        <input name="version" placeholder="Informe o número da versão" />
      </div>
      <Dropzone accept=".apx, .ipa" onDropAccepted={file => onUpload(file)}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
        }): any =>
          (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} data-testid="upload" />
              {renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
      </Dropzone>
    </>
  );
};

export default UploadFile;
