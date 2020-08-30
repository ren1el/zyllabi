import axios from 'axios';
const baseUrl = 'http://***REMOVED***/api/syllabi';

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

export default { getAllSyllabi, getSyllabus, addSyllabus };