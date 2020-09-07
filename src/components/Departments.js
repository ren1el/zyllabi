import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
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
      <div className="content center-content scrollable">
        <div className="departments">
          <h1>Departments</h1>
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="content center-content scrollable">
      <div className="departments">
        <h1>Departments</h1>
        {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
        
        <Form>
          <Form.Group controlId="department">
            <Form.Label>Filter</Form.Label>
            <Form.Control type="text" onChange={({ target }) => setSelectedDepartment(target.value)} placeholder="e.g. MATH" />
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
      </div>
    </div>
  );
};

export default Departments;