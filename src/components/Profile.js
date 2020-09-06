import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import '../styles/Home.css';
import usersService from '../services/usersService';
import syllabiService from '../services/syllabiService';

const Profile = ({ user, isUserResolved }) => {
  const [contributions, setContributions] = useState([]);
  const [isContributionsResolved, setIsContributionsResolved] = useState(false);

  useEffect(() => {
    try {
      if(user) {
        usersService.getUserContributions(user.id)
          .then((res) => {
            setContributions(res.syllabiContributed);
            setIsContributionsResolved(true);
          });
      }
    } catch(error) {
      console.log(error.message);
    }
  }, [user]);

  const editSyllabus = async (syllabusId, newAttributes) => {
    setIsContributionsResolved(false);
    const response = await syllabiService.editSyllabus(syllabusId, user, newAttributes);
    setIsContributionsResolved(true);
    setContributions(contributions.map((contribution) => {
      if(contribution.id === response.id) {
        return response;
      }
      return contribution;
    }));
  };

  const deleteSyllabus = async (syllabusId) => {
    setIsContributionsResolved(false);
    await syllabiService.deleteSyllabus(syllabusId, user);
    setIsContributionsResolved(true);
    setContributions(contributions.filter((contribution) => contribution.id !== syllabusId));
  };

  if(!isUserResolved) {
    return (
      <div className='content center-content'>
        <div className='profile'>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='content center-content scrollable'>
      <div className='profile'>
        {!user && <p>Login</p>}

        {user && <h2>{user.name}</h2>}

        {user && !isContributionsResolved && 
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }

        {user && isContributionsResolved && contributions.length > 0 && 
          <table className='text-center'>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Quarter/Year</th>
                <th>URL</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((syllabus) => {
                const id = syllabus.id;
                const department = syllabus.course.department.name;
                const courseNumber = syllabus.course.courseNumber;
                const instructor = syllabus.instructor;
                const quarter = syllabus.quarter;
                const year = syllabus.year;
                const url = syllabus.url;
                
                return (
                  <tr key={id}>
                    <td><Link to={`/syllabi/${department}/${courseNumber}`}>{department} {courseNumber}</Link></td>
                    <td>{instructor}</td>
                    <td>{quarter} {year}</td>
                    <td><a target='_blank' rel='noopener noreferrer' href={url}>PDF</a></td>
                    <td>
                      <EditModal syllabus={syllabus} handler={editSyllabus} />
                      <DeleteModal syllabus={syllabus} handler={deleteSyllabus} />
                    </td>
                  </tr>);
              })}
            </tbody>
          </table>
        }

        {user && isContributionsResolved && contributions.length === 0 && <div>No Contributions</div>}
      </div>
    </div>
  );
};

export default Profile;