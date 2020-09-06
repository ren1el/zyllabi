import axios from 'axios';
const baseUrl = `http://${process.env.REACT_APP_SERVER_PORT}/api/departments`; //eslint-disable-line

const getAllDepartments = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addDepartment = async (name) => {
  const newDepartment = {
    name: name
  };
  
  const response = await axios.post(baseUrl, newDepartment);
  return response.data;
};

export default { getAllDepartments, addDepartment };