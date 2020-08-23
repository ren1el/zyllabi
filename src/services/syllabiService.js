import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/syllabi';

const getAllSyllabi = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getSyllabus = async (courseDept, courseNumber) => {
  const response = await axios.get(`${baseUrl}/${courseDept}/${courseNumber}`);
  return response.data;
};

export default { getAllSyllabi, getSyllabus };