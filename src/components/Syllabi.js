import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';
import syllabusService from '../services/syllabiService';
import Syllabus from './Syllabus';
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

  if(syllabi.length === 0 || syllabus === null) {
    return (
      <div className='content center-content'>
        <div className='syllabi'>
          <Add />
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='content center-content'>
      <div className='syllabi'>
        <div className='syllabi-options'>
          <div className="dropdown mr-2">
            <span className="btn btn-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {syllabus.instructor} - {syllabus.quarter} {syllabus.year}
            </span>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {syllabi.map((syllabus) => <span key={syllabus.id} className='dropdown-item' onClick={() => setSyllabus(syllabus)}>{syllabus.instructor} - {syllabus.quarter} {syllabus.year}</span>)}
            </div>
          </div>
          <Add />
        </div>
        
        <Syllabus key={syllabus.id} syllabus={syllabus} />
      </div>
    </div>
  );
};

export default Syllabi;