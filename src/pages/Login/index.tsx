import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import api from '../../services/api';
import addFileImg from '../../assets/add_file.svg';
import BackButton from '../../components/Buttons/BackButton';
import Main from '../../components/Main';

interface FileProps {
  file: File;
  name: string;
}

const Login: React.FC = () => {
  const [uploadedFile, setUploadedFiles] = useState<FileProps | any>(null);
  const [osType, setOsType] = useState('Android');
  const [appVersion, setAppVersion] = useState('');
  const [errAppVersionValidation, setErrAppVersionValidation] = useState(false);
  const [errAppFileValidation, setErrAppFileValidation] = useState(false);

  const history = useHistory();

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
      <Title>Digite abaixo o seu usuário e senha</Title>
      <div>
        <div>
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
          <ButtonsContainer>
            <BackButton />
            <Button
              variant="contained"
              color="primary"
              size="medium"
              component="span"
            >
              <FiLogIn /> Login
            </Button>
          </ButtonsContainer>
        </div>
      </div>
    </Main>
  );
};

export default Login;

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

const ButtonsContainer = styled.div`
  > span {
    margin-right: 10px;
  }

  a {
    color: #fff;
  }
`;
