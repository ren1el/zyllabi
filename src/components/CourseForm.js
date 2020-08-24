import React from 'react';

const CourseForm = ({ courseDepartments, onSubmitCourse, onCourseDeptChanged, onCourseNumberChanged }) => {
  return (
    <form className='form-inline' onSubmit={onSubmitCourse}>
      <select className='custom-select m-1' onChange={onCourseDeptChanged}>
        <option value=''>Course Department</option>
        {courseDepartments.map((course) => <option key={course.id} value={course.name}>{course.name}</option>)}
      </select>
      <input type='text' className='form-control m-1' onChange={onCourseNumberChanged} placeholder='Course Number' />
      <input type='submit' className='btn btn-light m-1' value='Submit' />
    </form>
  );
};

export default CourseForm;