import axios from 'axios';
<<<<<<< HEAD
const baseUrl = `/api/departments`; //eslint-disable-line
=======
let baseUrl = '/api/departments';

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  baseUrl = 'http://localhost:3001/api/departments';
} 
>>>>>>> parent of f61fa4d... Change development routes

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