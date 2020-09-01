import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';
import syllabusService from '../services/syllabiService';
import Syllabus from './Syllabus';
import SyllabiOptions from './SyllabiOptions';
import Add from './Add';

const Syllabi = () => {
  const [syllabi, setSyllabi] = useState([]);
  const [syllabus, setSyllabus] = useState(null);
  const [message, setMessage] = useState('Loading...');
  const courseDept = useParams().courseDept;
  const courseNumber = useParams().courseNumber;

  useEffect(() => {
    syllabusService.getSyllabus(courseDept, courseNumber)
      .then((data) => {
        setSyllabi(data.sort((a, b) => b.year - a.year));
        setSyllabus(data[0]);
      })
      .catch((error) => {
        console.log(`No syllabus found. ${error}`);
        setMessage('No syllabus found :(');
      });
  }, [courseDept, courseNumber]);

  const onSubmitSyllabus = async (newSyllabus) => {
    const response = await syllabusService.addSyllabus(newSyllabus);
    setSyllabi(syllabi.concat(response).sort((a, b) => b.year - a.year));
  };

  if(syllabi.length === 0 || syllabus === null) {
    return (
      <div className='content center-content'>
        <div className='syllabi'>
          <h1>{courseDept} {courseNumber}</h1>
          <Add onSubmitSyllabus={onSubmitSyllabus} />
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='content center-content'>
      <div className='syllabi'>
        <h1>{courseDept} {courseNumber}</h1>
        <SyllabiOptions syllabi={syllabi} syllabus={syllabus} onSubmitSyllabus={onSubmitSyllabus} setSyllabi={setSyllabi} setSyllabus={setSyllabus} />
        <Syllabus key={syllabus.id} syllabus={syllabus} />
      </div>
    </div>
  );
};

export default Syllabi;