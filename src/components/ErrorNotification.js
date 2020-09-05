import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ErrorNotification;