import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FiArrowLeft } from 'react-icons/fi';

import React from 'react';

import { Container } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const BackButton: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.root}>
      <Button
        onClick={() => history.push('/')}
        variant="contained"
        color="default"
        size="large"
        component="span"
      >
        <FiArrowLeft />
        Voltar
      </Button>
    </Container>
  );
};

export default BackButton;
