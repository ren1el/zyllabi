import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({ department }) => {
  return (
    <div className="department-block">
      <p className="department-header">{department.name}</p>
      <ul className="department-list">
        {!department.courses.length && <p>No syllabi yet!</p>}
        {department.courses.map((course) => <li key={course.id}><Link to={`/syllabi/${department.name}/${course.courseNumber}`}>{department.name} {course.courseNumber}</Link></li>)}
      </ul>
    </div>
  );
};

export default Department;