import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';
import quarters from '../utils/quarters';
import years from '../utils/years';
import zyllabis3bucketService from '../services/zyllabis3bucketService';

const Add = ({ onSubmitSyllabus }) => {
  const [instructor, setInstructor] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');
  const [file, setFile] = useState({ fileName: null, fileType: null });
  const department = useParams().courseDept;
  const courseNumber = useParams().courseNumber;

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

  const onSubmitClicked = async (event) => {
    event.preventDefault();
    const signedRequest = await getSignedRequest(file);

    try {
      await zyllabis3bucketService.getUrl(signedRequest.signedRequest, file);
      const newSyllabus = {
        department,
        courseNumber,
        instructor,
        quarter,
        year,
        url: signedRequest.url
      };
  
      onSubmitSyllabus(newSyllabus);
    } catch(error) {
      console.log(`Error uploading a file : ${error.message}`);
    }
  };

  const getSignedRequest = async () => {
    const response = await zyllabis3bucketService.getSignedRequest(file);
    return response;
  };

  const onFileChanged = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
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
                <div className='form-group'>
                  <label>Instructor (Last Name)</label>
                  <input type='text' className='form-control' id='instructor' onChange={onInstructorChanged} />
                </div>
                <div className='form-group'>
                  Quarter
                  {/* <input type='text' className='form-control' id='quarter' onChange={onQuarterChanged} /> */}
                  <select className='form-control' id='quarter' onChange={onQuarterChanged}>
                    <option></option>
                    {quarters.map((quarter) => <option key={quarter} value={quarter}>{quarter}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  Year
                  {/* <input type='text' className='form-control' id='year' onChange={onYearChanged} /> */}
                  <select className='form-control' id='year' onChange={onYearChanged}>
                    <option></option>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  Upload
                  {/* <input type='text' className='form-control' id='url' onChange={onUrlChanged} /> */}
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" accept=".pdf, .docx" onChange={onFileChanged} />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary' onClick={onSubmitClicked}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;