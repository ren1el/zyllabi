import React from 'react';

const SyllabiDropdown = ({ syllabi, syllabus, setSyllabus }) => {
  return (
    <div className="dropdown mr-2">
      <span className="btn btn-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {syllabus.instructor} - {syllabus.quarter} {syllabus.year}
      </span>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {syllabi.map((syllabus) => <span key={syllabus.id} className='dropdown-item' onClick={() => setSyllabus(syllabus)}>{syllabus.instructor} - {syllabus.quarter} {syllabus.year}</span>)}
      </div>
    </div>
  );
};

export default SyllabiDropdown;