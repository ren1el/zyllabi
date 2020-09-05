import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';
import syllabusService from '../services/syllabiService';
import zyllabis3bucketService from '../services/zyllabis3bucketService';
import ErrorNotification from './ErrorNotification';
import Syllabus from './Syllabus';
import SyllabiDropdown from './SyllabiDropdown';
import Add from './Add';

const Syllabi = ({ user }) => {
  const [syllabi, setSyllabi] = useState([]);
  const [syllabus, setSyllabus] = useState(null);
  const [isSyllabiResolved, setIsSyllabiResolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const courseDept = useParams().courseDept;
  const courseNumber = useParams().courseNumber;

  useEffect(() => {
    syllabusService.getSyllabus(courseDept, courseNumber)
      .then((data) => {
        setSyllabi(data.sort((a, b) => b.year - a.year));
        setSyllabus(data[0]);
        setIsSyllabiResolved(true);
      })
      .catch((error) => {
        setIsSyllabiResolved(true);
        setErrorMessage(error.message);
      });
  }, [courseDept, courseNumber]);

  const onSubmitSyllabus = async (newSyllabus, signedRequest, file) => {
    try {
      setIsSyllabiResolved(false);
      const response = await syllabusService.addSyllabus(newSyllabus);
      await zyllabis3bucketService.putSyllabus(signedRequest.signedRequest, file);
      setSyllabi(syllabi.concat(response).sort((a, b) => b.year - a.year));
      setSyllabus(response);
      setIsSyllabiResolved(true);
    } catch(error) {
      if(error.response) {
        setIsSyllabiResolved(true);
        setErrorMessage(error.response.data.message);
      }
    }
  };

  if(!isSyllabiResolved) {
    return (
      <div className='content center-content'>
        <div className='syllabi'>
          <h1>{courseDept} {courseNumber}</h1>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='content center-content'>
      <div className='syllabi'>
        {/* {!(errorMessage === '') && <ErrorNotification message={errorMessage} />} */}

        <h1>{courseDept} {courseNumber}</h1>

        {syllabi.length > 0 && user &&
          <div className='syllabi-options'>
            {syllabi.length > 0 && <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />}
            <Add onSubmitSyllabus={onSubmitSyllabus} user={user} />
          </div>
        }

        {syllabi.length > 0 && !user &&
          <div className='syllabi-options'>
            {syllabi.length > 0 && <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />}
          </div>
        }

        {!syllabi.length && user &&
          <div className='syllabi-options'>
            <Add onSubmitSyllabus={onSubmitSyllabus} user={user} />
          </div>
        }

        {syllabus && <Syllabus syllabus={syllabus} user={user} />}
        {!syllabi.length && !syllabus && <p>No syllabus found :(</p>}
      </div>
    </div>
  );

  // if(syllabi.length === 0 || syllabus === null) {
  //   return (
  //     <div className='content center-content'>
  //       <div className='syllabi'>
  //         <h1>{courseDept} {courseNumber}</h1>
  //         <SyllabiOptions syllabi={syllabi} syllabus={syllabus} onSubmitSyllabus={onSubmitSyllabus} setSyllabus={setSyllabus} user={user} />
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className='content center-content'>
  //     <div className='syllabi'>
  //       <h1>{courseDept} {courseNumber}</h1>
  //       <SyllabiOptions syllabi={syllabi} syllabus={syllabus} onSubmitSyllabus={onSubmitSyllabus} setSyllabus={setSyllabus} user={user} />
  //       <Syllabus key={syllabus.id} syllabus={syllabus} user={user} />
  //     </div>
  //   </div>
  // );
};

export default Syllabi;