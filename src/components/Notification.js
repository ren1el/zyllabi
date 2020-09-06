import React from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ variant, message, setMessage }) => {
  setTimeout(() => {
    setMessage('');
  }, 3000);

  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  );
};

export default Notification;