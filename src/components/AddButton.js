import React from 'react';

const AddButton = ({ handler }) => {
  return (
    <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#addModal' onClick={handler}>
      Add
    </button>
  );
};

export default AddButton;