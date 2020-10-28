import React, { ReactNode } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: Function;
  osType: string;
}

const UploadFile: React.FC<UploadProps> = ({ onUpload, osType }: UploadProps) => {
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
      <Dropzone
        accept={osType === 'Android' ? 'application/vnd.android.package-archive' : '.ipa'}
        onDropAccepted={file => onUpload(file)}
        maxFiles={1}
        multiple={false}
      >
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
