import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiSend, FiUser } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import Main from '../../components/Main';
import { InputAdornment } from '@material-ui/core';

const Login: React.FC = () => {
  const [fieldValues, setFieldValues] = useState({
    username: '',
    password: '',
  });
  const [usernameValidationError, setUsernameValidationError] = useState('');
  const [passwordValidationError, setPasswrodValidationError] = useState('');

  const { addToast } = useToast();
  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      try {
        await signIn({
          username: fieldValues.username,
          password: fieldValues.password,
        });

        history.push('/upload');
      } catch (err) {
        console.log(err);

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique as credenciais.',
        });
      }
    },
    [signIn, addToast, history, fieldValues],
  );

  const handleChange = useCallback(
    name => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValues({ ...fieldValues, [name]: event.target.value });
    },
    [fieldValues],
  );

  return (
    <Main>
      <Title>Digite abaixo o seu usuário e senha</Title>
      <div>
        <div>
          <FormContainer style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              name="username"
              label="Usuário"
              placeholder="Nome de usuário"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange('username')}
              onBlur={() => setUsernameValidationError('')}
              error={!!usernameValidationError}
            />
            {usernameValidationError && <span>{usernameValidationError}</span>}
            <TextField
              name="password"
              type="password"
              label="Senha"
              placeholder="Senha"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiLock />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange('password')}
              onBlur={() => setPasswrodValidationError('')}
              error={!!passwordValidationError}
            />
            {passwordValidationError && <span>{passwordValidationError}</span>}

            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleSubmit}
            >
              <FiSend />
              Entrar
            </Button>
          </FormContainer>
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

const FormContainer = styled.form`
  .MuiFormControl-root {
    margin-bottom: 20px;
  }

  .MuiInputBase-root {
    svg {
      font-size: 1.4rem;
      color: var(--blue);
    }
  }

  button {
    margin-top: 30px;
  }

  button svg {
    margin-right: 8px;
  }
`;
