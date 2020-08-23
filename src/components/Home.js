import React from 'react';
import '../styles/Home.css';
import CourseForm from './CourseForm';

const Home = ({ courseDepartments, onSubmitCourse, onCourseDeptChanged, onCourseNumberChanged }) => {
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
        <p className='eg'>E.g. MATH 2A</p>
        <p>...or click here to look through the database!</p>
      </div>
    </div>
  );
};

export default Home;