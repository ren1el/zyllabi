import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteModal = ({ syllabus, handler }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    handleClose();
    handler(syllabus.id);
  };

  return (
    <>
      <Button className="m-1" variant="outline-light" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this syllabus for <strong>{syllabus.course.department.name} {syllabus.course.courseNumber}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;