import React, { useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Add = ({ onSubmitSyllabus }) => {
  const [instructor, setInstructor] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');
  const [url, setUrl] = useState('');
  const department = useParams().courseDept;
  const courseNumber = useParams().courseNumber;
  const history = useHistory();

  const onCancelClicked = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const onInstructorChanged = (event) => {
    event.preventDefault();
    setInstructor(event.target.value);
  };

  const onQuarterChanged = (event) => {
    event.preventDefault();
    setQuarter(event.target.value);
  };

  const onYearChanged = (event) => {
    event.preventDefault();
    setYear(event.target.value);
  };

  const onUrlChanged = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onSubmitClicked = (event) => {
    event.preventDefault();

    const newSyllabus = {
      department,
      courseNumber,
      instructor,
      quarter,
      year,
      url
    };

    onSubmitSyllabus(newSyllabus);
  };

  return (
    <div className='content center-content'>
      <div className='age'>
        <p>Add Page</p>
        <form onSubmit={onSubmitClicked}>
          <p>Instructor</p>
          <input type='text' onChange={onInstructorChanged} />
          <p>Quarter</p>
          <input type='text' onChange={onQuarterChanged} />
          <p>Year</p>
          <input type='text' onChange={onYearChanged} />
          <p>Url</p>
          <input type='text' onChange={onUrlChanged} />
          <button type='submit'>Submit</button>
          <button onClick={onCancelClicked}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Add;