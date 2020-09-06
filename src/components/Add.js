import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import '../styles/Home.css';
import quarters from '../utils/quarters';
import years from '../utils/years';
import Notification from './Notification';

const Add = ({ onSubmitSyllabus }) => {
  const [show, setShow] = useState(false);
  const [instructor, setInstructor] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const department = useParams().courseDept;
  const courseNumber = useParams().courseNumber;

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onFileChanged = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmitClicked = (event) => {
    event.preventDefault();

    //verify form
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
    } else if(file === null) {
      setErrorMessage('Please upload a syllabus.');
      return;
    }

    //submit syllabus
    handleClose();
    onSubmitSyllabus({
      department,
      courseNumber,
      instructor,
      quarter,
      year,
      file
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Syllabus for {department} {courseNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
          <Form>
            <Form.Group controlId="instructor">
              <Form.Label>Instructor (Last Name)</Form.Label>
              <Form.Control type="text" value={instructor} onChange={({ target }) => setInstructor(target.value)}/>
            </Form.Group>

            <Form.Group controlId="quarter">
              <Form.Label>Quarter</Form.Label>
              <Form.Control as="select" value={quarter} onChange={({ target }) => setQuarter(target.value)}>
                <option></option>
                {quarters.map((savedQuarter) => <option key={savedQuarter} value={savedQuarter}>{savedQuarter}</option>)}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" value={year} onChange={({ target }) => setYear(target.value)}>
                <option></option>
                {years.map((savedYear) => <option key={savedYear} value={savedYear}>{savedYear}</option>)}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Upload (.pdf, .docx)</Form.Label>
              <Form.File id="upload" accept=".pdf, .docx" onChange={onFileChanged} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmitClicked}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;