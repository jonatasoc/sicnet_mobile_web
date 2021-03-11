import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn, FiSend } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import Main from '../../components/Main';

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

        // TODO: If aluno go to /aluno, if admin go to /admin
        history.push('/upload');

        // history.push('/admin');
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
          <form>
            <TextField
              name="username"
              label="Identificação / E-mail"
              placeholder="Nome de usuário ou E-mail"
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
          </form>
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
