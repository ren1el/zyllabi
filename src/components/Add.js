import React, { useState} from 'react';
import { useParams } from 'react-router-dom';

const Add = ({ onSubmitSyllabus }) => {
  const [instructor, setInstructor] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');
  const [url, setUrl] = useState('');
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
    <div>
      <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#addModal'>
        Add
      </button>

      <div className='modal fade' id='addModal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>Add a syllabus</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmitClicked}>
                <div className='form-group'>
                  <label>Instructor (Last Name)</label>
                  <input type='text' className='form-control' id='instructor' onChange={onInstructorChanged} />
                </div>
                <div className='form-group'>
                  Quarter
                  <input type='text' className='form-control' id='quarter' onChange={onQuarterChanged} />
                </div>
                <div className='form-group'>
                  Year
                  <input type='text' className='form-control' id='year' onChange={onYearChanged} />
                </div>
                <div className='form-group'>
                  URL
                  <input type='text' className='form-control' id='url' onChange={onUrlChanged} />
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;