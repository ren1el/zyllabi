import React from 'react';
import '../styles/Home.css';

const Syllabus = ({ syllabus }) => {
  return (
    <div className='syllabus'>
      <div className='syllabus-heading'>
        <span>{syllabus.instructor} ({syllabus.quarter} {syllabus.year})</span>
      </div>
      <div className='syllabus-embed'>
        <iframe title={syllabus.id} className='syllabi-embed' src={syllabus.url} />
      </div>
    </div>
  );
};

export default Syllabus;