import axios from 'axios';
const baseUrl = 'http://192.168.1.150:3001/api/syllabi';

const getAllSyllabi = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getSyllabus = async (courseDept, courseNumber) => {
  const response = await axios.get(`${baseUrl}/${courseDept}/${courseNumber}`);
  return response.data;
};

const addSyllabus = async (newSyllabus) => {
  const response = await axios.post(baseUrl, newSyllabus);
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

export default { getAllSyllabi, getSyllabus, addSyllabus, deleteSyllabus };