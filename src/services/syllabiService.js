import axios from 'axios';
let baseUrl = '/api/syllabi';

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  baseUrl = 'http://localhost:3001/api/syllabi';
} 

const getAllSyllabi = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getSyllabus = async (courseDept, courseNumber) => {
  const response = await axios.get(`${baseUrl}/${courseDept}/${courseNumber}`);
  return response.data;
};

const addSyllabus = async (newSyllabus, user) => {
  const response = await axios.post(baseUrl, newSyllabus, 
    {
      headers: {
        Authorization: user.idToken
      }
    });
  return response.data;
};

const editSyllabus = async (syllabusId, user, newAttributes) => {
  const response = await axios.patch(`${baseUrl}/${syllabusId}`, newAttributes,
    {
      headers: {
        Authorization: user.idToken
      }
    });
  return response.data;
};

const deleteSyllabus = async (syllabusId, user) => {
  const response = await axios.delete(`${baseUrl}/${syllabusId}`,
    {
      headers: {
        Authorization: user.idToken
      }
    });
  return response.data;
};

export default { getAllSyllabi, getSyllabus, addSyllabus, editSyllabus, deleteSyllabus };
