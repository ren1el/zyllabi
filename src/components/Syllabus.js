import React from 'react';
import '../styles/Home.css';

const Syllabus = ({ syllabus }) => {
  return (
    <div className='syllabus'>
      <div className='syllabus-heading'>
        {syllabus.instructor} ({syllabus.quarter} {syllabus.year})
      </div>
      <div className='syllabus-embed'>
        <iframe title={syllabus.id} className='syllabi-embed' src={syllabus.url} />
      </div>
    </div>
  );
};

export default Syllabus;