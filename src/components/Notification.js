import React from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ variant, message, setMessage }) => {
  setTimeout(() => {
    setMessage('');
  }, 3500);

  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  );
};

export default Notification;