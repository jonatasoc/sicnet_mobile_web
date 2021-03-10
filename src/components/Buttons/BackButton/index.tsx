import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FiArrowLeft } from 'react-icons/fi';

import React from 'react';

const BackButton: React.FC = () => {
  const history = useHistory();

  return (
    <Button
      onClick={() => history.push('/')}
      variant="contained"
      color="default"
      size="medium"
      component="span"
    >
      <FiArrowLeft style={{ fontSize: '1.5rem', marginRight: '5px' }} />
      Voltar
    </Button>
  );
};

export default BackButton;
