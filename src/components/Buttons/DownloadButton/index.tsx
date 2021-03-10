import { Button } from '@material-ui/core';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadButton: React.FC = ({ children }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      component="span"
      style={{ marginRight: '10px' }}
    >
      <FiDownload style={{ marginRight: '5px', fontSize: '1.5rem' }} />
      {children}
    </Button>
  );
};

export default DownloadButton;
