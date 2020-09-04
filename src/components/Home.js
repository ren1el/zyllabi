import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import departmentService from '../services/departmentService';
import CourseForm from './CourseForm';
import '../styles/Home.css';

const Home = () => {
  const [courseDepartments, setCourses] = useState([{ id: 0, value: '', courseString: 'Course Department' }]);
  const [courseDept, setCourseDept] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
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

  const onCourseDeptChanged = (event) => {
    setCourseDept(event.target.value);
  };

  const onCourseNumberChanged = (event) => {
    setCourseNumber(event.target.value);
  };

  const onSubmitCourse = (event) => {
    event.preventDefault();
    if(courseDept === '' && courseNumber === '') console.log('Please add BOTH a course department and a course number');
    else if(courseDept === '') console.log('Please add a course department');
    else if(courseNumber === '') console.log('Please add a course number');
    else {
      history.push(`/syllabi/${courseDept}/${courseNumber}`);
    }
  };

  return (
    <div className='content'>
      <div className='home'>
        <h1 className='header'>zyllabi</h1>
        <p>A crowd-sourced database of UC Irvine course syllabi.</p>
        <h2 className='mt-1 mr-1 mb-1'>Find a course:</h2> 
        <CourseForm
          courseDepartments={courseDepartments} 
          onSubmitCourse={onSubmitCourse} 
          onCourseDeptChanged={onCourseDeptChanged} 
          onCourseNumberChanged={onCourseNumberChanged} 
        />
        <p className='eg'>e.g. MATH 2A</p>
        <p>...or click here to look through the database!</p>
      </div>
    </div>
  );
};

export default Home;