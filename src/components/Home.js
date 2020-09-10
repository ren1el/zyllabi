import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import departmentService from '../services/departmentService';
import Notification from './Notification';
import CourseForm from './CourseForm';

const Home = () => {
  const [courseDepartments, setCourses] = useState([{ id: 0, value: '', courseString: 'Course Department' }]);
  const [courseDept, setCourseDept] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    departmentService.getAllDepartments()
      .then((courseDepartments) => {
        courseDepartments.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        setCourses(courseDepartments.sort((a, b) => a.name - b.name));
      });
  }, []);

  const onSubmitCourse = (event) => {
    event.preventDefault();

    if(courseDept === '' && courseNumber === '') {
      setErrorMessage('Please add a course department AND a course number.');
      return; 
    } else if(courseDept === '') {
      setErrorMessage('Please add a course department.');
      return;
    }
    else if(courseNumber === '') {
      setErrorMessage('Please add a course number.');
      return;
    }
    else {
      history.push(`/syllabi/${courseDept.toUpperCase()}/${courseNumber.toUpperCase()}`);
    }
  };

  return (
    <Container>
      <div className="home">
        <h1 className="home-header-main">zyllabi</h1>
        <p className="home-description">A crowd-sourced database of UC Irvine course syllabi.</p>
        <h2 className="home-header-find">Find a course:</h2>
        {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
        <CourseForm
          courseDepartments={courseDepartments} 
          onSubmitCourse={onSubmitCourse} 
          onCourseDeptChanged={({ target }) => setCourseDept(target.value)} 
          onCourseNumberChanged={({ target }) => setCourseNumber(target.value)} 
        />
        <p className="home-example">e.g. MATH 2A</p>
        <p className="home-to-database">...or click <Link to="/departments">here</Link> to look through the database!</p>
      </div>
    </Container>
  );
};

export default Home;