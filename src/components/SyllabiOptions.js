import React from 'react';
import Add from './Add';
import SyllabiDropdown from './SyllabiDropdown';

const SyllabiOptions = ({ syllabus, syllabi, onSubmitSyllabus, setSyllabi, setSyllabus }) => {
  return (
    <div className='syllabi-options'>
      <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />
      <Add onSubmitSyllabus={onSubmitSyllabus} setSyllabi={setSyllabi} />
    </div>
  );
};

export default SyllabiOptions;