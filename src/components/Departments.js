import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import departmentService from '../services/departmentService';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [isDepartmentsResolved, setIsDepartmentsResolved] = useState(false);

  useEffect(() => {
    departmentService.getAllDepartments()
      .then((data) => {
        setDepartments(data);
        setIsDepartmentsResolved(true);
      });
  }, []);

  return (
    <div className='content center-content scrollable'>
      <div className='departments'>
        <h1>Departments</h1>
        {!isDepartmentsResolved && <Loading />}
        {departments.map((department) => {
          return (
            <div key={department.id} className="department-block">
              <p className='department-header'>{department.name}</p>
              <ul>
                {!department.courses.length && <p>No syllabi yet!</p>}
                {department.courses.map((course) => <li key={course.id}><Link to={`/syllabi/${department.name}/${course.courseNumber}`}>{department.name} {course.courseNumber}</Link></li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;