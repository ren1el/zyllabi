import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';
import quarters from '../utils/quarters';
import years from '../utils/years';
import zyllabis3bucketService from '../services/zyllabis3bucketService';
import ErrorNotification from './ErrorNotification';

const Add = ({ onSubmitSyllabus, user }) => {
  const [instructor, setInstructor] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const department = useParams().courseDept;
  const courseNumber = useParams().courseNumber;

  const onInstructorChanged = (event) => {
    setInstructor(event.target.value);
  };

  const onQuarterChanged = (event) => {
    setQuarter(event.target.value);
  };

  const onYearChanged = (event) => {
    setYear(event.target.value);
  };

  const onFileChanged = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmitClicked = async (event) => {
    try {
      event.preventDefault();
      const signedRequest = await zyllabis3bucketService.getSignedRequest(file);

      const newSyllabus = {
        department,
        courseNumber,
        instructor,
        quarter,
        year,
        url: signedRequest.url,
        idToken: user.idToken
      };

      onSubmitSyllabus(newSyllabus, signedRequest, file);
    } catch(error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#addModal'>
        Add
      </button>

      <div className='modal fade add' id='addModal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>Add syllabus for {department} {courseNumber}</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                {!(errorMessage === '') && <ErrorNotification message={errorMessage} />}
                <div className='form-group'>
                  <label>Instructor (Last Name)</label>
                  <input type='text' className='form-control' id='instructor' value={instructor} onChange={onInstructorChanged} />
                </div>
                <div className='form-group'>
                  Quarter
                  <select className='form-control' id='quarter' value={quarter} onChange={onQuarterChanged}>
                    <option></option>
                    {quarters.map((quarter) => <option key={quarter} value={quarter}>{quarter}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  Year
                  <select className='form-control' id='year' value={year} onChange={onYearChanged}>
                    <option></option>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  Upload
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" accept=".pdf, .docx" onChange={onFileChanged} />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary' onClick={onSubmitClicked} data-dismiss='modal'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;