import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../styles/Home.css';
import syllabusService from '../services/syllabiService';

const Syllabus = () => {
  const [syllabi, setSyllabi] = useState([]);
  const [message, setMessage] = useState('Loading...');
  const courseDept = useParams().courseDept;
  const courseNumber = useParams().courseNumber;
  const history = useHistory();

  useEffect(() => {
    syllabusService.getSyllabus(courseDept, courseNumber)
      .then((data) => setSyllabi(data))
      .catch((error) => {
        console.log(`No syllabus found. ${error}`);
        setMessage('No syllabus found :(');
      });
  }, [courseDept, courseNumber]);

  const onAddClicked = (event) => {
    event.preventDefault();
    history.push(`/syllabi/${courseDept}/${courseNumber}/add`);
  };

  if(syllabi.length === 0) {
    return (
      <div className='content center-content'>
        <div className='syllabi'>
          <button onClick={onAddClicked}>Add</button>
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='content center-content'>
      {console.log(syllabi)}
      <div className='syllabi'>
        <button onClick={onAddClicked}>Add</button>
        {syllabi.map((syllabus) => 
          <ul key={syllabus.id}>
            <li>{syllabus.courseDept.name}</li>
            <li>{syllabus.course.courseNumber}</li>
            <li>{syllabus.instructor}</li>
            <li>{syllabus.quarter}</li>
            <li>{syllabus.url}</li>
            <li>{syllabus.year}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Syllabus;