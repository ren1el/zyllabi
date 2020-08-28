import React from 'react';
import '../styles/Home.css';

const Syllabus = ({ syllabus }) => {
  return (
    <div className='syllabus'>
      <div className='syllabus-heading'>
        <h2>{syllabus.instructor} - {syllabus.quarter} {syllabus.year}</h2>
        <p>{syllabus.url}</p>
      </div>
      <div className='syllabus-embed'>
        <iframe title={syllabus.id} className='syllabi-embed' src={syllabus.url} />
      </div>
    </div>
  );
};

export default Syllabus;