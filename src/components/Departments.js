import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import departmentService from '../services/departmentService';
import Notification from './Notification';
import Loading from './Loading';
import Department from './Department';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isDepartmentsResolved, setIsDepartmentsResolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    departmentService.getAllDepartments()
      .then((data) => {
        setDepartments(data);
        setIsDepartmentsResolved(true);
      })
      .catch(() => {
        setErrorMessage('There was an error fetching the database.');
        setIsDepartmentsResolved(true);
      });
  }, []);

  if(!isDepartmentsResolved) {
    return (
      <div className="departments">
        <Container>
          <h1>Departments</h1>
          <Loading />
        </Container>
      </div>
    );
  }

  return (
    <div className="departments">
      <Container>
        <h1>Departments</h1>
        {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
        
        <Form>
          <Form.Group controlId="department">
            <Form.Label>Filter Departments</Form.Label>
            <Form.Control type="text" onChange={({ target }) => setSelectedDepartment(target.value)} placeholder="e.g. MATH" />
            <Form.Text>
              NOTE: Type in a department as you would see it on WebSOC! For example, entering ’ics’ won’t work but ’i&c sci’ will.
            </Form.Text>
          </Form.Group>
        </Form>

        {!(selectedDepartment === '') &&
          departments.filter((department) => department.name.startsWith(selectedDepartment.toUpperCase()))
            .map((department) => {
              return (
                <Department key={department.id} department={department} />
              );
            })
        }

        {selectedDepartment === '' && 
          departments.map((department) => {
            return (
              <Department key={department.id} department={department} />
            );
          })
        }
      </Container>
    </div>
  );
};

export default Departments;