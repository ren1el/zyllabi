import axios from 'axios';
const baseUrl = 'http://192.168.1.150:3001/api/departments';

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