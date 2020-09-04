import React from 'react';
import Add from './Add';
import SyllabiDropdown from './SyllabiDropdown';

const SyllabiOptions = ({ syllabus, syllabi, onSubmitSyllabus, setSyllabus, user }) => {

  return (
    <div className='syllabi-options'>
      {syllabi.length > 0 && syllabus && <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />}
      {user && <Add onSubmitSyllabus={onSubmitSyllabus} user={user} />}
    </div>
  );

  // if(syllabi.length === 0 || syllabus === null) {
  //   return (
  //     <div className='syllabi-options'>
  //       <Add onSubmitSyllabus={onSubmitSyllabus} user={user} />
  //     </div>
  //   );
  // }

  // if(user) {
  //   return (
  //     <div className='syllabi-options'>
  //       <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />
  //       <Add onSubmitSyllabus={onSubmitSyllabus} user={user} />
  //     </div>
  //   );
  // }

  // return (
  //   <div className='syllabi-options'>
  //     <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />
  //   </div>
  // );
};

export default SyllabiOptions;