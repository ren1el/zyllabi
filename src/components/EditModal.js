import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import quarters from '../utils/quarters';
import years from '../utils/years';
import Notification from './Notification';

const EditModal = ({ syllabus, handler }) => {
  const [show, setShow] = useState(false);
  const [instructor, setInstructor] = useState(syllabus.instructor);
  const [quarter, setQuarter] = useState(syllabus.quarter);
  const [year, setYear] = useState(syllabus.year.toString());
  const [errorMessage, setErrorMessage] = useState('');

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setInstructor(syllabus.instructor);
    setQuarter(syllabus.quarter);
    setYear(syllabus.year);
  };

  const handleSave = () => {
    if(instructor === '') {
      setErrorMessage('Please specify an instructor.');
      return;
    } else if(quarter === '') {
      setErrorMessage('Please sepcify a quarter.');
      return;
    } else if(!quarters.includes(quarter)) {
      setErrorMessage('Please specify a valid quarter (Fall, Winter, Spring, or Summer).');
      return;
    } else if(year === '') {
      setErrorMessage('Please specify a year.');
      return;
    } else if(!years.includes(year)) {
      setErrorMessage('Please specify a valid year.');
      return;
    }
    handleClose();
    handler(syllabus.id, { instructor, quarter, year });
  };

  return (
    <>
      <Button className="m-1" variant="outline-light" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Syllabus for {syllabus.course.department.name} {syllabus.course.courseNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
          <Form>
            <Form.Group controlId="instructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control type="text" value={instructor} onChange={({ target }) => setInstructor(target.value)}/>
            </Form.Group>

            <Form.Group controlId="quarter">
              <Form.Label>Quarter</Form.Label>
              <Form.Control as="select" value={quarter} onChange={({ target }) => setQuarter(target.value)}>
                {quarters.map((savedQuarter) => <option key={savedQuarter} value={savedQuarter}>{savedQuarter}</option>)}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" value={year} onChange={({ target }) => setYear(target.value)}>
                {years.map((savedYear) => <option key={savedYear} value={savedYear}>{savedYear}</option>)}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;