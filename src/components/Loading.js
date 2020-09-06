import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({ size }) => {
  return (
    <Spinner animation="border" role="status" size={size}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;