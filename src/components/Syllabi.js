import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import syllabusService from '../services/syllabiService';
import zyllabis3bucketService from '../services/zyllabis3bucketService';
import Loading from './Loading';
import Notification from './Notification';
import SyllabiDropdown from './SyllabiDropdown';
import AddModal from './AddModal';
import Syllabus from './Syllabus';

const Syllabi = ({ user }) => {
  const [syllabi, setSyllabi] = useState([]);
  const [syllabus, setSyllabus] = useState(null);
  const [isSyllabiResolved, setIsSyllabiResolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const courseDept = useParams().courseDept.toUpperCase();
  const courseNumber = useParams().courseNumber.toUpperCase();

  useEffect(() => {
    syllabusService.getSyllabus(courseDept, courseNumber)
      .then((data) => {
        setSyllabi(data.sort((a, b) => b.year - a.year));
        setSyllabus(data[0]);
        setIsSyllabiResolved(true);
      })
      .catch(() => {
        setIsSyllabiResolved(true);
      });
  }, [courseDept, courseNumber]);

  const onSubmitSyllabus = async (attributes) => {
    try {
      setIsSyllabiResolved(false);
      const signedRequest = await zyllabis3bucketService.getSignedRequest(attributes.file);
      const newSyllabus = {
        department: attributes.department,
        courseNumber: attributes.courseNumber,
        instructor: attributes.instructor,
        quarter: attributes.quarter,
        year: attributes.year,
        url: signedRequest.url
      };
      const response = await syllabusService.addSyllabus(newSyllabus, user);
      await zyllabis3bucketService.putSyllabus(signedRequest.signedRequest, attributes.file);
      setSyllabi(syllabi.concat(response).sort((a, b) => b.year - a.year));
      setSyllabus(response);
      setIsSyllabiResolved(true);
      setSuccessMessage('Successfully uploaded syllabus. Go to your profile page to see your contributions.');
    } catch(error) {
      setIsSyllabiResolved(true);
      setErrorMessage(error.message);
    }
  };

  if(!isSyllabiResolved) {
    return (
      <div className="content center-content">
        <div className="syllabi">
          <h1>{courseDept} {courseNumber}</h1>
          <Loading size="lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="content center-content">
      <div className="syllabi">
        {!(errorMessage === '') && <Notification variant="danger" message={errorMessage} setMessage={setErrorMessage} />}
        {!(successMessage === '') && <Notification variant="success" message={successMessage} setMessage={setSuccessMessage} />}

        <h1>{courseDept} {courseNumber}</h1>

        {syllabi.length > 0 && user &&
          <div className="syllabi-options">
            {syllabi.length > 0 && <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />}
            <AddModal onSubmitSyllabus={onSubmitSyllabus} user={user} />
          </div>
        }

        {syllabi.length > 0 && !user &&
          <div className="syllabi-options">
            {syllabi.length > 0 && <SyllabiDropdown syllabi={syllabi} syllabus={syllabus} setSyllabus={setSyllabus} />}
          </div>
        }

        {!syllabi.length && user &&
          <div className="syllabi-options">
            <AddModal onSubmitSyllabus={onSubmitSyllabus} user={user} />
          </div>
        }

        {syllabus && <Syllabus syllabus={syllabus} user={user} />}
        {!syllabi.length && !syllabus && <p>No syllabus found :(</p>}
      </div>
    </div>
  );
};

export default Syllabi;