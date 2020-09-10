import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
import usersService from '../services/usersService';
import syllabiService from '../services/syllabiService';
import Loading from './Loading';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  if(!isUserResolved) {
    return (
      <div className="profile">
        <Container>
          <Loading size="lg" />
        </Container>
      </div>
    );
  }

  return (
    <div className="profile">
      <Container>
        {!user && <p className="text-center">Login to continue!</p>}

        {user && <h1>Your Contributions</h1>}

        {user && !isContributionsResolved && 
          <Loading size="lg" />
        }

        {user && isContributionsResolved && contributions.length > 0 && 
          <Table className="table-custom-style text-center" responsive borderless hover size="sm">
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th className="profile-table-quarter-header">Quarter/Year</th>
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
                    <td className="profile-table-quarter-col">{quarter} {year}</td>
                    <td>
                      <Button variant="outline-light m-1" onClick={() => openInNewTab(url)}>
                        <BiLinkExternal />
                      </Button>
                    </td>
                    <td>
                      <EditModal syllabus={syllabus} handler={editSyllabus} />
                      <DeleteModal syllabus={syllabus} handler={deleteSyllabus} />
                    </td>
                  </tr>);
              })}
            </tbody>
          </Table>
        }

        {user && isContributionsResolved && contributions.length === 0 && <div>No Contributions</div>}
      </Container>
    </div>
  );
};

export default Profile;